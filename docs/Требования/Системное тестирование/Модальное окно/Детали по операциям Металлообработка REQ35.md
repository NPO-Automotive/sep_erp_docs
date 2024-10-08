---
sidebar_position: 35
---

## Путь 
Производство (/production) -> Металлообработка (/metalloworking)

## Описание
Модальное окно "Детали по операциям" предоставляет пользователям информацию о текущих операциях, связанных с металлообработкой.

### Особенности
- Отображает операции в виде кнопок, каждая из которых содержит:
  - Порядковый номер операции.
  - Название операции.
  - Количество наименований деталей, доступных на данный момент в этой операции.
- Операции, не имеющие деталей на данный момент, скрыты, что упрощает восприятие информации и фокусирует внимание на актуальных данных.

### Функционал
- Позволяет пользователям быстро просматривать и идентифицировать операции, связанные с металлообработкой.
- Упрощает доступ к информации о количестве деталей, что может быть полезно для планирования и управления запасами.
- Скрытие операций без деталей помогает избежать путаницы и улучшает пользовательский опыт.

---
## Требования
- **Доступность**
    - Модальное окно должно быть доступно пользователям, которые взаимодействуют со страницей "Металлообработка" и выбирают операции для просмотра деталей.
- **Структура отображения**
   - Модальное окно должно отображать операции в виде кнопок.
   - Каждая кнопка должна содержать:
     - Порядковый номер операции.
     - Название операции.
     - Количество наименований деталей, доступных на данный момент в этой операции.
     - При клике на кнопку открывается соответствующая страница операции с указанным количеством наименований на данном этапе.
- **Скрытие операций**
   - Операции, не имеющие деталей на данный момент, должны быть скрыты от пользователя, чтобы избежать путаницы и улучшить восприятие информации.
- **Удобство использования**
   - Модальное окно должно быть легко закрываемым, чтобы пользователи могли быстро вернуться к предыдущему интерфейсу.
   - Должна быть обеспечена четкая визуализация информации, чтобы пользователи могли быстро идентифицировать нужные операции.


