// DARK MMOD
const toggleButton = document.getElementById("toggle-dark-mode");
toggleButton.addEventListener("click", () => {
  // تبديل بين الوضع العادي والداكن
  document.body.classList.toggle("dark-mode");

  // تغيير الأيقونة بناءً على الوضع الحالي
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.classList.remove("fa-moon");
    toggleButton.classList.add("fa-sun"); // تغيير الأيقونة إلى الشمس
  } else {
    toggleButton.classList.remove("fa-sun");
    toggleButton.classList.add("fa-moon"); // إعادة الأيقونة إلى القمر
  }
});

// إظهار الزر عند التمرير
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let scrollTopBtn = document.getElementById("scrollTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block"; // إظهار الزر
  } else {
    scrollTopBtn.style.display = "none"; // إخفاء الزر
  }
}

// التمرير إلى أعلى الصفحة بسلاسة
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// conter enmation
function animateCounter() {
  const counters = document.querySelectorAll("h3[data-target]");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    if (count < target) {
      const increment = target / 200; // تعديل السرعة، كلما زادت القيمة كلما كان أبطأ
      const delay = 300; // تأخير 0.5 ثانية قبل بدء العد

      // إضافة التأخير لمدة 0.5 ثانية
      setTimeout(() => {
        const updateCounter = () => {
          const currentCount = +counter.innerText;

          if (currentCount < target) {
            counter.innerText = Math.ceil(currentCount + increment);
            setTimeout(updateCounter, 15); // ضبط سرعة العد
          } else {
            counter.innerText = target; // تأكد من وصول الرقم النهائي
          }
        };

        updateCounter(); // تشغيل العداد
      }, delay);
    } else {
      counter.innerText = target;
    }
  });
}

// استخدام Intersection Observer
const section = document.querySelector(".Happy-Gifting");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(); // تشغيل العداد عندما يصبح القسم مرئيًا
      }
    });
  },
  { threshold: 0.5 }
); // تشغيل العداد عند ظهور نصف القسم

observer.observe(section);

// login
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    const isPasswordVisible = passwordInput.type === "text";

    passwordInput.type = isPasswordVisible ? "password" : "text";
    eyeIcon.className = isPasswordVisible ? "bi bi-eye" : "bi bi-eye-slash";
  });

// إضافة التحقق من النموذج

// التحقق من صحة البيانات عند إرسال النموذج
    function validateForm() {
      const email = document.getElementById("email").value;
      const userName = document.getElementById("userName").value;
      const phone = document.getElementById("phone").value;
      const password = document.getElementById("password").value; // إضافة حقل كلمة المرور
      const error = document.getElementById("error");
      let text = "";

      // Reset error messages
      error.innerHTML = "";

      // Check if fields are empty
      if (!userName) {
        text += "يرجى إدخال اسم مستخدم<br>";
      }
      if (!email) {
        text += "يرجى إدخال بريد إلكتروني<br>";
      }
      if (!phone) {
        text += "يرجى إدخال رقم هاتف<br>";
      }
      if (!password) {
        text += "يرجى إدخال كلمة المرور<br>";
      }

      // Validate username length
      if (userName.length < 5) {
        text += "يرجى إدخال اسم مستخدم صالح (5 أحرف على الأقل)<br>";
      }

      // Validate email format
      if (email.indexOf("@") === -1 || email.length < 10) {
        text += "يرجى إدخال بريد إلكتروني صالح<br>";
      }

      // Validate phone number
      if (isNaN(phone) || phone.length < 11) {
        text += "يرجى إدخال رقم هاتف صالح (11 رقم على الأقل)<br>";
      }

      // Display error messages if any
      if (text) {
        error.innerHTML = text;
        return false; // منع إرسال النموذج
      }

      return true; // السماح بإرسال النموذج
    }