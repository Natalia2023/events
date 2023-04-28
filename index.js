// весь код нижче отримує логін та пароль з форми

const form = document.querySelector(".form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    // щоб не перезавантажувалася сторінка
  event.preventDefault();
  const {
    // деструкторизація едементів
    elements: { login, password }
  } = event.currentTarget;
// якщо користувач не ввів логін чи пароль то повертаємо повідомлення
  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
//   очищаємо форму
  event.currentTarget.reset();
}