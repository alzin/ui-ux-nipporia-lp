import { useState } from "react";
import Swal from "sweetalert2";
import { TFormData } from "@/types/formData.type";

// const Toast = Swal.mixin({
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener("mouseenter", Swal.stopTimer);
//     toast.addEventListener("mouseleave", Swal.resumeTimer);
//   },
// });

const initialFormData: TFormData = {
  company: "",
    name: "",
    email: "",
    website: "",
    message: "",
};

export const useFormHandler = () => {
  const [formData, setFormData] = useState<TFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [click, setClick] = useState(false);

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

    Swal.fire({
      title: "送信しています...",
      html: "そのままお待ちください。",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          "サーバーエラーが発生しました。もう一度お試しください。"
        );
      }
      setFormData(initialFormData);

      Swal.close();
      await Swal.fire({
        icon: "success",
        title: "送信が完了しました",
        html: `メールを送信しました。<br />確認メールをお送りしましたので、<br />ご確認ください。<br /> <br />
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
        title: "エラー発生！",
        text: `送信中にエラーが発生しました: ${errMsg}`,
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
