---
sidebar_position: 15
---

## Путь 
Склад (/sclad) -> Склад: Задачи на отгрузку (/issuetopull)

## Описание
Страница отображаета таблицу с информацией о задачах на отгрузку. Пользователь может выбрать и отгрузить задачу, а также распечатать её. Для удобного управления задачами предусмотрены фильтры по датам, статусу и покупателям, что позволяет быстро находить и обрабатывать нужные задачи.

### Особенности
- **Интерактивная таблица**
  - Отображение задач на отгрузку с ключевой информацией.
- **Управление задачами**
  - Возможность отгрузки выбранной задачи.
  - Функция печати для удобства документирования.
- **Фильтрация данных**
  - Фильтр по датам для поиска задач в нужный период.
  - Фильтр по статусу для сортировки задач по их текущему состоянию.
  - Фильтр по покупателям для быстрого поиска задач, связанных с конкретными клиентами.

### Функционал
-  **Отображение задач**
   - Таблица с подробной информацией о каждой задаче на отгрузку.
- **Управление задачами**
   - Возможность отгрузить выбранную задачу.
   - Печать задачи для ведения отчетности.
- **Фильтрация**
   - Фильтрация задач по выбранным датам.
   - Фильтрация по статусу для удобства управления.
   - Фильтрация по покупателям для персонализированного поиска.

## Требования
- **Просмотр задач**
  - Пользователь должен иметь возможность просматривать список задач на отгрузку.
- **Управление задачами**
  - Пользователь должен иметь возможность отгрузить выбранные задачи.
  - Пользователь должен иметь возможность распечатать выбранные задачи.
- **Фильтрация и поиск**
  - Пользователь должен иметь возможность отфильтровать задачи по датам.
  - Пользователь должен иметь возможность отфильтровать задачи по статусу.
  - Пользователь должен иметь возможность искать задачи по номеру заказа, артикулу или наименованию задачи.
  - Пользователь должен иметь возможность просматривать историю запросов.

## Макет
![Пример изображения окна Склад: Задачи на отгрузку](\img\WarehouseShippingTasks.png)

| Элементы окна | Назначение |
|---|---|
|Table 1| Таблица со списком задач на отгрузку |
|Button 1| Сбрасывает фильтр даты |
|Button 2| Открывает модальное окно "Добавить покупателя" |
|Button 3| Сбрасывает все фильтры |
|Button 4| Отправляет на печать |
|Button 5| Открывает модальное окно "Отгрузка" |
|Input 1| Поле ввода даты |
|Input 2| Поле ввода даты |
|Checkbox| Выделяет из списка строку для работы |

## Фильтр по датам
- **Поля ввода:**
   - **Input 1:** 
     - Назначение: "Выбрать период, с:"
     - Значение по умолчанию: текущая дата минус 40 лет.
     - Формат: `DD.MM.YYYY`
     - Календарь: появляется при наведении курсора.
   - **Input 2:** 
     - Назначение: "по:"
     - Значение по умолчанию: сегодняшняя дата.
     - Формат: `DD.MM.YYYY`
     - Календарь: появляется при наведении курсора.
- **Кнопка сброса:**
   - **Button 1:** 
     - Назначение: "Сбросить период или дату"
     - Функциональность: сбрасывает оба поля ввода на значения по умолчанию.
- **Условия:**
   - Оба поля должны содержать даты в формате `DD.MM.YYYY`.
   - Даты не могут быть пустыми.

## Описания фильтра "Фильтр по статусу:"
"Фильтр по статусу:" реализован в форме выпадающего меню (dropdown menu) и предназначен для управления данными по их статусу.

### Особенности
- **Форма представления**
  - Выпадающее меню (dropdown menu) обеспечивает удобный доступ к опциям.
- **Четыре варианта фильтрации**
  - **Просрочено, Заказано**: отображает позиции с истекшим сроком и позиции, которые были заказаны.
  - **Все**: отображает все позиции.
  - **Отложено**: включает позиции, которые были отложены.
  - **Удалено**: показывает удаленные позиции.
- **Значение по умолчанию**
   - Автоматически выбирается опция "Просрочено, Заказано", чтобы пользователь сразу видел полный список без необходимости настройки.

### Функционал
- **Фильтрация данных**
  - Быстрая сортировка элементов по статусу.
- **Эффективное управление**
  - Помогает в принятии решений, анализируя статусы.
- **Улучшение визуализации**
  - Предоставляет актуальную информацию в зависимости от выбранного статуса.

## Описание функции "Выбрать покупателя"
Функция "Выбрать покупателя" реализована в виде кнопки и предназначена для фильтрации данных по конкретному покупателю.

### Особенности
- **Форма представления**
  - Кнопка (Button 2) инициирует взаимодействие.
- **Модальное окно**
  - При нажатии открывается модальное окно "Добавить покупателя".
  - Позволяет выбрать покупателя из списка.

### Функционал
- **Фильтрация данных**
  - Упрощает поиск и отображение данных, связанных с выбранным покупателем.
- **Интуитивный интерфейс**
  - Обеспечивает удобство в использовании и быстроту доступа.
- **Улучшение навигации**
  - Позволяет быстро находить нужную информацию, связав её с конкретным покупателем.

## Описание функции "Сбросить все фильтры"
Функция "Сбросить все фильтры" предназначена для возврата всех фильтров к значениям по умолчанию.

### Особенности
- **Форма представления**
  - Кнопка (Button 3) инициирует действие.
  
### Функционал
- **Сброс фильтров**
  - При нажатии все фильтры в текущем окне возвращаются к изначальным настройкам.
- **Удобство использования**
  - Позволяет быстро очистить все выбранные параметры и начать настройку фильтров заново.
- **Эффективность**
  - Ускоряет процесс управления данными, устраняя необходимость ручного сброса каждого фильтра.

## Описание таблицы Задач на отгрузку
Таблица задач на отгрузку (Table 1) отображает список заказов, запланированных для отгрузки, и предоставляет пользователю удобные инструменты для управления и отслеживания этих заказов.

### Структура
- **Иконка галочка**
  - Checkbox для отметки выбранного заказа.
  - Автоматически отмечается при выборе заказа в списке.
- **Заказ**
  - Отображает номер задачи на отгрузку.
- **Артикул изделия**
  - Показывает артикул изделия из задачи на отгрузку.
- **Наименование изделия**
  - Отображает наименование изделия из задачи на отгрузку.
- **Поиск**
  - Расположен под описанными выше колонками и занимает всю их ширину.
  - Позволяет искать изделия по "Обозначению" или "Наименованию".
  - Включает возможность просмотра истории запросов поиска.
  - Используется placeholder для подсказки пользователю допустимых значений поиска.
- **Комплектация/особенности заказа**
  - [иконка](/img/plus.png), открывающая модальное окно "Комплектация заказа".
  - Отображает спецификацию комплектации изделия.
- **Кол-во, шт.**
  - Показывает количество заказанных единиц.
- **Кол-во, дней**
  - Количество дней от даты заказа до плановой даты отгрузки.
- **Осталось дней**
  - Количество дней до плановой даты отгрузки.
- **Основание**
  - Название прикрепленного документа, открывающее модальное окно "Карточка файла" при клике.
  - Название отображается синим цветом.
- **Покупатель**
  - Имя контрагента из заказа.
- **Ур. комплектации**
  - Уровень комплектации в процентах, показывающий соотношение свободного количества к требуемому.
- **Комплектация по остаткам**
  - [иконка](/img/plus.png), открывающая модальное окно "Накладная на комплектацию Сущности".
- **Готовность к отгрузке в %**
  - Процентное соотношение количества заказанных к количеству на складе.
- **Статус**
  - Статус задачи: "Заказано", "Просрочено", "Отгружено", "Удалено".
- **Дата План. отгрузки**
  - Дата плановой отгрузки заказа.
- **Дата Факт. отгрузки**
  - Фактическая дата отгрузки заказа.
- **Примечание**
  - [иконка](/img/plus.png), открывающая модальное окно "Примечание".

### Особенности и функционал
- **Поиск**
  - Возможность поиска по номеру заказа, артикулу или наименованию изделия.
- **Интерактивность**
  - Двойной клик на любую колонку, кроме иконок и "Основание", открывает модальное окно "Заказ".
- **Управление**
  - Удобное управление заказами с помощью чекбоксов и модальных окон для получения дополнительных деталей.
- **Визуализация**
  - Цветовое выделение и иконки для быстрого доступа к информации и управления.

## Описание "Компонентов управления"
Компоненты управления включают две кнопки: "Печать" и "Отгрузить". Они фиксированы внизу экрана для удобного доступа и управления задачами.

### Особенности
- **Фиксированное расположение**
  - Кнопки всегда находятся внизу экрана, обеспечивая легкий доступ.
- **Интуитивное взаимодействие**
  - Понятные названия кнопок облегчают использование.
- **Предупреждения**
  - Система предупреждает о необходимости выбора задачи, предотвращая ошибки.

### Функционал
[Пример изображения компонентов управления](\img\WarehouseShippingTasksControl.png)
- **Печать** (Button 4)
  - **Функция**: Позволяет вывести выбранную задачу на предпросмотр печати.
  - **Действие**: При нажатии открывается предпросмотр. 
  - **Предупреждение**: Если задача не выбрана, появляется предупреждение "Для начала выберите задачу".
- **Отгрузить** (Button 5)
  - **Функция**: Открывает модальное окно для отгрузки выбранной задачи.
  - **Действие**: При нажатии открывается модальное окно "Отгрузка".
  - **Предупреждение**:  Если задача не выбрана, отображается предупреждение "Для начала выберите задачу".