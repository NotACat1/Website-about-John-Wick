![Джон Уик](https://media.kg-portal.ru/images/johnwickchaptertwo/johnwickchaptertwo_22.jpg)

# Вебсайт о Джоне Уике

Данный веб сайт был создан, для пробы творческого пера как UIX дизайнера и WEB программиста. Но а также искренней любви франшизы Джона Уика.

____

## Реализованный функционал:

### 1. Favicon
**Favicon** — это иконка, которая отображается во вкладке браузера перед названием сайта.   
![Favicon](https://ic.wampi.ru/2023/05/14/IZOBRAZENIE_2023-05-14_222316198.png)
```html
<!-- favicon -->
<link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon.png">
<link rel="icon" href="./images/favicon/favicon.ico" sizes="any">
<link rel="manifest" href="./images/favicon/manifest.webmanifest">
<link rel="yandex-tableau-widget" href="./images/favicon/tableau.json">
```

### 2. Open Graph
**Open Graph** — это интернет-протокол, который был создан Facebook, чтобы стандартизировать использование мета-данных, представляющих содержимое веб-страницы.    
![Open Graph](https://ic.wampi.ru/2023/05/14/IZOBRAZENIE_2023-05-14_223308172.png)
```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="John Wick">
<meta property="og:description" content="John Wick - at first glance, the most ordinary average American who leads a quiet peaceful life. However, few people know that he was a hired killer, and one of the best professionals in his field.">
<meta property="og:url" content="https://notacat1.github.io/Website-about-John-Wick">
<meta property="og:image" content="http://uzmovi.biz/foto/images/2019/08/29/1546628322_mfoxes-net-cover-english-2.jpg">
<meta property="og:site_name" content="John Wick">
<meta property="og:locale" content="en_GB">
<meta property="og:video" content="https://youtu.be/sdHI47rSExE">
```

### 3. Адаптивная верстка
**Адаптивная верстка** — это такой способ создания веб-страниц, при котором они автоматически подстраиваются под размеры и ориентацию экрана устройства, а их дизайн варьируется в зависимости от действий пользователя.    
![Desktop](https://im.wampi.ru/2023/05/14/imagee59b88f90496ac0f.png)
![Mobile](https://im.wampi.ru/2023/05/14/imagef03eaf5d438e310e.png)

### 4. Адаптивный текст
**Адаптивный или отзывчивый шрифт** — это такой способ задания размера текста, при котором размер текста изменяется в зависимости от пропорций размера экрана.
```css
/* Добавление локальных перменных */
.page {
  --index: calc(1vh + 1vw);
  --text-factor: 1;
}
/* Экран уже 1199px */
@media screen and (max-width: 1199px) {
  .page {
    --text-factor: 1.5;
  }
}
/* Экран шире 1200px */
@media screen and (min-width: 1200px) {
  .page {
    --text-factor: 1;
  }
}
/* Задания размера текста */
.header__title {
  font-size: calc(var(--index) * 2.6 * var(--text-factor));
}
```

### 5. Прелоадер
**Прелоадер** (от англ."preloader") - предварительный загрузчик, особый индикатор, который информирует пользователя о том, что страница или контент находятся в процессе загрузки.
![Preloader](https://im.wampi.ru/2023/05/14/image1d8c666e16581d32.png)
```html
<!-- Прелоудер -->
<div class="container-fluid PreloaderBlock">
  <div class="PreloaderBlock__Preloader">
    <div class="PreloaderBlock__BoxText">
      <p class="PreloaderBlock__text">Loading...</p>
      <p class="PreloaderBlock__text PreloaderBlock__text_transparent">Loading...</p>
    </div>
  </div>
</div>
```

```css
.PreloaderBlock {
  position: fixed;
  top: 0;
  left: 0;
  height: 130vh;
  padding-bottom: 30vh;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}
.PreloaderBlock__text {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: #d8d8d8;
  font-size: calc(var(--index) * 3 * var(--text-factor));
  font-weight: 700;
  margin-bottom: 0;
}
.PreloaderBlock__text_transparent {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  font-size: calc(var(--index) * 3 * var(--text-factor));
  font-weight: 700;
  width: 0;
  z-index: 50000;
}
.PreloaderBlock__Preloader {
  width: calc(var(--index) * 25);
  height: calc(var(--index) * 25);;
  display: flex;
  justify-content: center;
  align-items: center;
  border: #000 calc(var(--index) * .5 * var(--text-factor)) solid;
  background-color: white;
}
.PreloaderBlock__BoxText {
  position: relative;
}
```

```js
let tl = gsap.timeline();
function ready() {
  tl.to(".PreloaderBlock__text_transparent", { duration: 1,  width: "100%", repeat: -1, yoyo: true });
}

document.addEventListener("DOMContentLoaded", ready);

let t2 = gsap.timeline();
window.onload = function() {
  tl.pause();
  t2.to(".PreloaderBlock__text_transparent", { duration: 1, width: "100%" });
  t2.to(".PreloaderBlock", { duration: 1.2, y: '-130vh' }, 1);
  t2.to(".PreloaderBlock", { duration: 0, display: "none" }, 2.2);
};
```

### 6. Анимации
На сайте анимации могут решать целый ряд конкретных задач. Одна из них – заполнение времени, которое пользователю нужно ждать загрузки страницы. Смотреть на статичную страницу не так интересно, как на красивую анимацию. В итоге те пользователи, которые могли бы покинуть сайт, остаются на нем – и как результат растет конверсия.
1. Анимация прелоудера;
2. Анимация появления заголовка;
3. Анимация исчезновения блоков;
4. Анимация появления постеров фильмов и саундреков.

### 7. Iframe
**IFrame** — это кадр внутри кадра. Это компонент HTML-элемента, который позволяет встраивать документы, видео и интерактивные медиафайлы на страницу. Сделав это, вы сможете отобразить дополнительную страницу на главной веб-странице.
![Iframe](https://im.wampi.ru/2023/05/14/image3eebdbe42addbf90.png)
```html
<iframe class="main__AudioIframe" id="JohnWick3__AudioIframe" src="https://music.yandex.ru/iframe/#playlist/Yamineralog/1154">Слушайте <a href='https://music.yandex.ru/users/Yamineralog/playlists/1154'>John Wick 3 Official Soundtrack</a> — <a href='https://music.yandex.ru/users/Yamineralog'>Yamineralog</a> на Яндекс Музыке</iframe>
```

```css
.main__AudioIframe {
  width: 100%;
  height: 90vh;
  border: none;
}
```

### 8. Методология разработки БЭМ
**БЭМ** — это современный метод верстки, который расшифровывается как «блок — элемент — модификатор». БЭМ позволяет соблюдать единые правила верстки, которые помогают быстро разрабатывать интерфейсы, гибко их настраивать и легко модифицировать.

**В данной работе реализованы такие блоки:**
1. Header - шапка сайта;
2. Main - блоки с основным контентом;
3. Footer - подвал сайта;
4. PreloaderBlock - блок прелоудера.

### 8. Файловая структура Nested
Классическая схема организации файловой структуры БЭМ-проектов:

- Блоку соответствует одна директория.
- Код модификаторов и элементов находится в отдельных файлах.
- Файлы модификаторов и элементов хранятся в отдельных директориях.
- Директория блока является корневой для поддиректорий его элементов и модификаторов.
- Имена директорий элементов начинаются с двойного подчеркивания (__).
- Имена директорий модификаторов начинаются с одинарного подчеркивания (_).
  
____

## Использованные технологии

### 1. Normalize.css
**Normalize.css** — это небольшой CSS-файл, который обеспечивает для HTML-элементов лучшую кроссбраузерность в стилях по умолчанию. Это современная, готовая к HTML5 альтернатива традиционному reset.css.

### 2. Bootstrap v5.1.3
**Bootstrap** — это открытый и бесплатный HTML -, CSS - и JS-фреймворк, который используют веб-разработчики для быстрой верстки адаптивных дизайнов сайтов и веб-приложений. Включает в себя CSS - и HTML-шаблоны оформления для веб-форм, меток, типографики, кнопок, блоков навигации и других компонентов веб-интерфейса.    
*Использовался:*
- Система сеток, мощную сетку flexbox, ориентированную на мобильные устройства, для создания макетов всех форм и размеров благодаря системе из двенадцати колонок, шести адаптивным уровням по умолчанию, переменным и миксинам Sass, а также десяткам предопределенных классов.
- Иконки Bootstrap - бесплатная высококачественная библиотека иконок с открытым исходным кодом, содержащая более 1600 иконок.

### 3. GSAP
**GreenSock Animation Platform** (сокращенно GSAP)-  это мощная библиотека JavaScript, которая позволяет разработчикам и дизайнерам создавать надежные анимации на основе временной шкалы. Это позволяет точно управлять более сложными анимационными последовательностями, а не иногда ограничивающими ключевыми кадрами и анимацией свойства, которые предлагает CSS.
*Использовался:*
- GSAP анимации.
- ScrollTrigger - анимации при прокрутке сайта.