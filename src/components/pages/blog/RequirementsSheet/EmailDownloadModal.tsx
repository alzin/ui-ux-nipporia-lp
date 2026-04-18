"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface EmailDownloadModalProps {
  open: boolean;
  onClose: () => void;
  onDownloadStart?: () => void;
  downloadUrl: string;
  fileName: string;
  labels: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    submitting: string;
    cancel: string;
    privacyNote: string;
    successTitle: string;
    successMessage: string;
    errorMessage: string;
    invalidEmail: string;
    close: string;
  };
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export const EmailDownloadModal: React.FC<EmailDownloadModalProps> = ({
  open,
  onClose,
  onDownloadStart,
  downloadUrl,
  fileName,
  labels,
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setErrorMsg(null);
    setEmail("");

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    const t = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const triggerDownload = useCallback(() => {
    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = fileName;
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }, [downloadUrl, fileName]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = email.trim();
      if (!EMAIL_REGEX.test(trimmed)) {
        setStatus("error");
        setErrorMsg(labels.invalidEmail);
        return;
      }

      setStatus("submitting");
      setErrorMsg(null);

      try {
        const res = await fetch("/api/requirements-sheet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed }),
        });

        if (!res.ok) {
          let message = labels.errorMessage;
          try {
            const data = (await res.json()) as { message?: string };
            if (data?.message) message = data.message;
          } catch {
            // ignore parsing error; keep default
          }
          throw new Error(message);
        }

        setStatus("success");
        onDownloadStart?.();
        triggerDownload();
      } catch (err) {
        setStatus("error");
        setErrorMsg(
          err instanceof Error ? err.message : labels.errorMessage,
        );
      }
    },
    [email, labels.errorMessage, labels.invalidEmail, onDownloadStart, triggerDownload],
  );

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="requirements-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-purple-100 overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="absolute top-3 right-3 w-8 h-8 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition flex items-center justify-center z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 to-cyan-500" />

        <div className="p-6 md:p-8">
          {status === "success" ? (
            <div className="text-center py-4">
              <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-cyan-100 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3
                id="requirements-modal-title"
                className="text-xl font-bold text-gray-800 mb-2"
              >
                {labels.successTitle}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                {labels.successMessage}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold hover:opacity-95 transition shadow-lg shadow-purple-200"
              >
                {labels.close}
              </button>
            </div>
          ) : (
            <>
              <div className="mb-5 flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-cyan-100 text-purple-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    id="requirements-modal-title"
                    className="text-lg font-bold text-gray-800"
                  >
                    {labels.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {labels.subtitle}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <label
                  htmlFor="requirements-email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  {labels.emailLabel}
                </label>
                <input
                  ref={inputRef}
                  id="requirements-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") {
                      setStatus("idle");
                      setErrorMsg(null);
                    }
                  }}
                  placeholder={labels.emailPlaceholder}
                  disabled={status === "submitting"}
                  autoComplete="email"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition text-gray-800 placeholder:text-gray-400 disabled:bg-gray-100"
                  aria-invalid={status === "error"}
                  aria-describedby={
                    errorMsg ? "requirements-email-error" : undefined
                  }
                />
                {errorMsg && (
                  <p
                    id="requirements-email-error"
                    className="mt-2 text-sm text-red-600"
                    role="alert"
                  >
                    {errorMsg}
                  </p>
                )}

                <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                  {labels.privacyNote}
                </p>

                <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
                  >
                    {labels.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold hover:opacity-95 transition shadow-lg shadow-purple-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        {labels.submitting}
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        {labels.submit}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default EmailDownloadModal;
