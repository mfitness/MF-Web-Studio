
import emailjs from "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/+esm";

const SERVICE_ID = "service_q5etsjh";
const TEMPLATE_ID = "template_dr44ds8";
const PUBLIC_KEY = "-PeC5dHIo7Db3tzSG";

const form = document.getElementById("requestForm");
const message = document.getElementById("formMessage");

if (form && message) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const params = {
      name: document.getElementById("name").value.trim(),
      project: document.getElementById("project").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      category: document.getElementById("category").value,
      details: document.getElementById("details").value.trim()
    };

    try {
      message.textContent = "جاري إرسال طلبك...";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        params,
        { publicKey: PUBLIC_KEY }
      );

      message.textContent = "تم إرسال طلبك بنجاح! سنتواصل معك قريباً.";
      message.style.color = "#d7b15c";
      form.reset();

    } catch (error) {
      console.error("EmailJS error:", error);
      message.textContent = "تعذر إرسال الطلب. حاول مرة أخرى.";
      message.style.color = "#ff7777";
    }
  });
}
