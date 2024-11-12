const loader = document.getElementById("loader");
const itemsContainer = document.getElementById("items");

let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const valute = data.response.Valute;

    for (const key in valute) {
      if (valute.hasOwnProperty(key)) {
        const currency = valute[key];

        const item = document.createElement("div");

        const itemCode = document.createElement("div");
        itemCode.className = "item__code";
        itemCode.textContent = currency.CharCode;

        const itemValue = document.createElement("div");
        itemValue.className = "item__value";
        itemValue.textContent = (currency.Value / currency.Nominal).toFixed(2);

        const itemCurrency = document.createElement("div");
        itemCurrency.className = "item__currency";
        itemCurrency.textContent = currency.Name;

        item.appendChild(itemCode);
        item.appendChild(itemValue);
        item.appendChild(itemCurrency);
        item.style.marginBottom = "10px";

        itemsContainer.appendChild(item);
      }
    }
  } else {
    console.error("Ошибка при загрузке данных:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Ошибка сети");
};

xhr.onloadend = function () {
  loader.classList.remove("loader_active");
};

xhr.send();
