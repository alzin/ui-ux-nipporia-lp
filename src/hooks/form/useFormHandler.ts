import { useState } from "react";
import type SwalType from "sweetalert2";
import { TFormData } from "@/types/formData.type";
import { useLanguage } from "@/i18n/LanguageContext";

const initialFormData: TFormData = {
  company: "",
  name: "",
  email: "",
  website: "",
  message: "",
  locale: "",
};

export const useFormHandler = () => {
  const [formData, setFormData] = useState<TFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [click, setClick] = useState(false);
  const { t, lang } = useLanguage();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const Swal: typeof SwalType = await import("sweetalert2").then(
      (m) => m.default
    );

    Swal.fire({
      title: t.form.sendingTitle,
      html: t.form.sendingMessage,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale: lang }),
      });

      if (!response.ok) {
        throw new Error(t.form.serverError);
      }
      setFormData(initialFormData);

      Swal.close();
      await Swal.fire({
        icon: "success",
        title: t.form.successTitle,
        html: `${t.form.successMessage}<br /> <br />
          <button id="close-modal" class="close-button">x</button>`,
        showConfirmButton: false,
        customClass: {
          popup: "custom-popup",
        },
        didOpen: () => {
          const closeButton = document.getElementById("close-modal");
          if (closeButton) {
            closeButton.addEventListener("click", () => {
              Swal.close();
            });
          }
        },
      });
    } catch (error: unknown) {
      Swal.close();

      const errMsg = error instanceof Error ? error.message : "Unknown error";
      Swal.fire({
        icon: "error",
        title: t.form.errorTitle,
        text: `${t.form.errorMessage}: ${errMsg}`,
      });
    } finally {
      setIsSubmitting(false);
      setClick(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    click,
    setClick,
  };
};
