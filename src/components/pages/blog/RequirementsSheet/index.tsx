"use client";

import { useCallback, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import DocxViewer from "./DocxViewer";
import EmailDownloadModal from "./EmailDownloadModal";

export const REQUIREMENTS_SHEET_PAGES: string[] = Array.from(
  { length: 13 },
  (_, i) =>
    `/files/requirements-preview/page-${String(i + 1).padStart(2, "0")}.jpg`,
);

export const REQUIREMENTS_SHEET_FILE = "要件整理シート.docx";
export const REQUIREMENTS_SHEET_DOWNLOAD_URL = `/api/requirements-sheet/download`;

export const RequirementsSheet: React.FC = () => {
  const { t } = useLanguage();
  const ui = t.requirementsSheet;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);
  return (
    <section
      className="mt-14 md:mt-20"
      aria-labelledby="requirements-sheet-heading"
    >
      <div className="relative overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-white via-purple-50/60 to-cyan-50/60 p-6 md:p-10 shadow-xl">
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-purple-300/30 to-cyan-300/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-gradient-to-br from-cyan-300/30 to-purple-300/30 blur-3xl"
        />

        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 text-xs font-semibold mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="15" y2="17" />
                </svg>
                {ui.tag}
              </span>
              <h2
                id="requirements-sheet-heading"
                className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight"
              >
                {ui.title}
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
                {ui.description}
              </p>
            </div>

            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold hover:opacity-95 transition shadow-lg shadow-purple-200 whitespace-nowrap"
              aria-haspopup="dialog"
              aria-expanded={modalOpen}
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {ui.downloadButton}
            </button>
          </div>

          <DocxViewer
            pages={REQUIREMENTS_SHEET_PAGES}
            title={ui.title}
            viewOnlyLabel={ui.viewOnly}
            pageLabel={ui.pageLabel}
            previousLabel={ui.previous}
            nextLabel={ui.next}
            zoomInLabel={ui.zoomIn}
            zoomOutLabel={ui.zoomOut}
          />

          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            {ui.viewOnlyNote}
          </p>
        </div>
      </div>

      <EmailDownloadModal
        open={modalOpen}
        onClose={closeModal}
        downloadUrl={REQUIREMENTS_SHEET_DOWNLOAD_URL}
        fileName={REQUIREMENTS_SHEET_FILE}
        labels={{
          title: ui.modal.title,
          subtitle: ui.modal.subtitle,
          emailLabel: ui.modal.emailLabel,
          emailPlaceholder: ui.modal.emailPlaceholder,
          submit: ui.modal.submit,
          submitting: ui.modal.submitting,
          cancel: ui.modal.cancel,
          privacyNote: ui.modal.privacyNote,
          successTitle: ui.modal.successTitle,
          successMessage: ui.modal.successMessage,
          errorMessage: ui.modal.errorMessage,
          invalidEmail: ui.modal.invalidEmail,
          close: ui.modal.close,
        }}
      />
    </section>
  );
};

export default RequirementsSheet;
