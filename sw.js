/ Ваш Service Worker
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Перехватываем конкретный URL скрипта
  if (url.pathname.includes('/chunks/UfCaP2iK25jj.js')) {
    event.respondWith(
      // Формируем собственный ответ с вашим кодом и ПРАВИЛЬНЫМИ заголовками
      new Response(
        `
        // ВАШ КОД ИЗ ФАЙЛА UfCaP2iK25jj.js ЗДЕСЬ
        console.log("Скрипт успешно подменен!");
        `,
        {
          headers: {
            'Content-Type': 'application/javascript; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    );
  }
  
  // Для всех остальных запросов - просто пропускаем их дальше
  // return; или event.respondWith(fetch(event.request));
});