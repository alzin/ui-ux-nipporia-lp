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
      className="mt-10"
      aria-labelledby="requirements-sheet-heading"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex-1">
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
        pageLabel={ui.pageLabel}
/>

      <EmailDownloadModal
        open={modalOpen}
        onClose={closeModal}
        downloadUrl={REQUIREMENTS_SHEET_DOWNLOAD_URL}
        fileName={REQUIREMENTS_SHEET_FILE}
        labels={{
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
