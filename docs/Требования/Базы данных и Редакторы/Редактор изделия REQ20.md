---
sidebar_position: 20
---

## Путь
База деталей (/basedetals) -> Обновление Изделия (/product/edit/false/)

## Описание
Страница "Редактор Изделия" предоставляет комплексную информацию о сущности с возможностью редактирования, включая её обозначение, заводсткой номер, наименование и ответственного сотрудника. Пользователь может быстро получить доступ к краткой спецификации с возможностью открытия полной версии. Окно позволяет оставлять описания и примечания, просматривать прикрепленные файлы, а также управлять ими. Включены функции отображения времени на сборку, характеристик, и рекомендаций по остаткам. Также можно изменять технологический процесс, просматривать себестоимость и историю изменений. Все изменения можно сохранить и синхронизировать с базой данных.

### Особенности
- **Удобный интерфейс**
    - Обеспечивает легкий доступ ко всем функциям и данным.
- **Гибкость в управлении данными**
    - Возможность редактирования и обновления информации в реальном времени.
- **Управление файлами**
    - Простое управление прикрепленными документами и изображениями.
    - Возможность добавления файлов через drag and drop, а также предпросмотр и печать.
- **История изменений**
    - Просмотр и отслеживание всех изменений.
- **Выделение спецсимволами**
    - Возможность выделить имя сущности для акцента.

### Функционал
- **Просмотр и редактирование информации**
    - Обозначение, артикул, наименование, ответственный сотрудник.
- **Спецификации**
    - Краткий и полный обзор спецификаций с возможностью редактирования.
- **Примечания**
    - Возможность добавления и редактирования описаний.
- **Управление файлами**
    - Доступ, управление и редактирование прикрепленных документов.
- **Галерея изображений**
    - Просмотр, управление и редактирование изображений сущности.
- **Рекомендации по остаткам**
    - Информация и редактирование рекомендуемого и минимального остатка.
- **Изменение технологического процесса**
    - Корректировка и редактирование процессов и операций.
- **Отображение себестоимости**
    - Просмотр и редактирование актуальной информации о себестоимости.
- **Сохранение изменений**
    - Обновление и сохранение данных в базе сущностей.
- **Выделить в списке**
    - Возможность отметить и редактировать отметку сущности спецсимволом для быстрого поиска и идентификации.

## Требования
- **Просмотр и редактирование информации**
   - Возможность просматривать и изменять наименование, артикул и обозначение сущности.
- **Управление ответственным лицом**
   - Изменение и назначение ответственного за сущность.
- **Работа со спецификацией**
   - Просмотр краткой и полной спецификации.
   - Возможность редактировать спецификацию.
- **Нормы времени на сборку**
   - Просмотр и редактирование норм времени.
- **Описания и примечания**
   - Добавление и редактирование описаний и примечаний.
   - Изменение размеров поля ввода для удобства.
- **Управление файлами**
   - Просмотр и добавление прикрепленных и архивных файлов.
   - Возможность печати файлов.
   - Загрузка файлов с устройства или из базы данных.
- **Работа с изображениями**
   - Просмотр изображений с использованием слайдера.
- **Анализ и рекомендации**
   - Определение принадлежности сущности.
   - Управление рекомендациями по остаткам.
- **Характеристики сущности**
   - Просмотр и редактирование характеристик.
- **Обновление и сохранение**
    - Сохранение изменений или возврат без изменений.
- **Дополнительные функции**
    - Управление спецсимволами.
    - Просмотр технологического процесса.
    - Просмотр истории изменений.
- **Валидация данных**
    - Проверка введенных данных на корректность перед сохранением.
    - Вывод сообщений об ошибках с указанием причины.
- **Контроль доступа**
    - Доступ к редактированию сущности должен быть ограничен авторизованными пользователями.
    - Реализация системы ролей и прав доступа.

---
## Макет
![Пример изображения редактирования сущности](\img\EditingEntity.png)

| Элементы окна | Назначение |
|---|---|
|Table 1| Таблица Спецификации |
|Table 2| Таблица Характеристики |
|Table 3| Таблица Параметры |
|Table 4| Таблица с прикрепленными файлами |
|Button 1| Открывает модальное окно "Технологический процесс" |
|Button 2|  |
|Button 3|  |
|Button 4| Открывает модальное окно "История изменений" |
|Button 5|  |
|Button 6| Открывает модальное окно "Полная спецификация" |
|Button 7| Выводит на предпросмотр печати файлы из таблицы 4 |
|Button 8| Открывает модальное окно "База файлов" |
|Button 9| Сохраняет все изменения |
|Button 10| Закрывает окно и возвращается в базу |
|Button 11| Добавляет строку в таблицу с характеристиками |
|Button 12| Добавляет строку в таблицу с параметрами |
|Input 1| Поле ввода Заводсткого номера |
|Input 2| Поле ввода Обозначения |
|Input 3| Поле ввода Наименования |
|textarea| Блок примечания |
|Dropdown| Список ответственных |
|Checkbox| Отметка проставления спецсимвола |
|Drag and Drop| Поле для загрузки файлов |

---
## Верхний блок
## Описание основных элементов интерфейса
- **Заводской номер**
    - Поле ввода (Input 1) предназначено для ввода идентификатора сущности.
    - Используется placeholder, чтобы помочь пользователю понять, что необходимо ввести.
    - Допустимое количество символов: от 3 до 255, что позволяет обеспечить уникальность и гибкость идентификатора.
- **Обозначение**
    - Поле ввода (Input 2) предназначено для ввода уникального кода или номера сущности. 
    - Используется placeholder, чтобы помочь пользователю понять, что необходимо ввести.
    - Допустимое количество символов от 3 до 255, что позволяет обеспечить уникальность и гибкость идентификатора.
- **Наименование**
    - Поле ввода (Input 3) предназначено для ввода названия сущности. 
    - Используется placeholder, чтобы помочь пользователю понять, что необходимо ввести.
    - Допустимое количество символов: от 3 до 255, что позволяет обеспечить уникальность и гибкость идентификатора.
- **Ответственный**
    - Выпадающее меню (Dropdown) для выбора ответственного лица.
    - Позволяет выбрать, кто отвечает за создание сущности.
    - По умолчанию выбирается текущий авторизованный пользователь.
- **Выделить в поиске**
    - Выполнено в виде флажка (Checkbox).
    - При активации создаваемая сущность будет выделена специальным символом в базе данных.
    - По умолчанию опция не активирована.
- **Технологический процесс**
    - Выполнена в виде кнопки (Button 1).
    - При нажатии открывает модальное окно "Технологический процесс".
- **Себестоимость**
    - Выполнена в виде кнопки (Button 2).
    - При нажатии открывает модальное окно <span style={{color: "red"}}>TODO: требуется уточнение, в макете тоже самое!</span>.
- **Принадлежность**
    - Выполнена в виде кнопки (Button 3).
    - При нажатии открывает модальное окно <span style={{color: "red"}}>TODO: требуется уточнение, в макете тоже самое!</span>.
- **История изменений**
    - Выполнена в виде кнопки (Button 4).
    - Открывает модальное окно "История изменений" для просмотра всех изменений.

## Описание поле Примечание (textarea)
Поле "Примечание" предназначено для отображения и редактирования примечаний, оставленных к выбранному изделию.

### Особенности
- **Текстовое поле**
  - Поле позволяет вводить и редактировать текстовые примечания.
- **Удобство использования**
  - Поле расположено в удобном месте интерфейса для быстрого доступа и редактирования.

### Функционал
- **Отображение примечания**
  - Поле показывает текущее примечание, связанное с выбранным изделием.
- **Редактирование примечания**
  - Пользователь может вносить изменения в текст примечания.
- **Допустимые значения**
  - Допустимое количество символов: от 0 до 255

---
## Нижние блоки
## Описание раздела "Комплектация" (Table 1)
Раздел "Комплектация" предназначен для детального управления и отображения спецификации продукции. Он включает в себя таблицу с краткой информацией о компонентах и две кнопки для выполнения дополнительных действий.

### Структура таблицы
Таблица раздела "Комплектация" состоит из следующих колонок:
- **№**
    - Порядковый номер записи в таблице.
- **Обозначение**
    - Уникальное обозначение потомка.
- **Наименование**
    - Полное наименование потомка.
- **Ед.**
    - Единица измерения.
- **Кол-во**
    - Количество единиц компонента.

### Категории комплектации
Таблица разделена на четыре категории, каждая из которых указывает на тип потомков редактируемой сущности:
- **Сборочная единица (Тип СБ)**
    - Компоненты, представляющие собой сборочные единицы.
- **Детали (Тип Д)**
    - Отдельные детали, входящие в состав продукции.
- **Стандартные или покупные детали (Тип ПД)**
    - Детали, которые являются стандартными или покупаются у сторонних поставщиков.
- **Расходные материалы (Тип РМ)**
    - Материалы, которые расходуются в процессе производства или эксплуатации.

### Функциональные элементы
- **Кнопка "Добавить" (Button 5)**
    - Кнопка для добавления новых потомков в таблицу.
    - Позволяет расширять спецификацию продукции, добавляя новые компоненты.
- **Кнопка "Полная спецификация" (Button 6)**
    - Кнопка для открытия модального окна с полными данными о спецификации.
    - Предоставляет доступ к детализированной информации о всех компонентах, входящих в комплектацию.

---
## Описание таблицы Характеристики (Table 2)
Таблица "Характеристики" предназначена для управления характеристиками товара или объекта.

### Особенности
- Содержит две предустановленные строки: "Рекомендуемый остаток" и "Минимальный остаток" в шт.
- В этих строках можно изменить только значение, удаление недоступно (иконка урны отображается серым).

### Функционал
- **Наименование**
    - Поле ввода текста (3-255 символов).
- **Еи**
    - Единица измерения; поле ввода текста (0-255 символов).
- **Значение**
    - Поле ввода текста (0-255 символов).
    - Красная иконка урны позволяет удалять строки, кроме предустановленных.
    - Кнопка "Добавить" (Button 12) добавляет новую строку в таблицу.

## Описание таблицы Параметры (Table 3)
Таблица "Параметры" используется для управления параметрами, связанными с процессами или задачами.

### Особенности
- Содержит одну предустановленную строку: "Норма времени на сборку" в шт.
- В этой строке можно изменить только значение, удаление недоступно (иконка урны отображается серым).

### Функционал
- **Наименование**
    - Поле ввода текста (3-255 символов).
- **Еи**
    - Единица измерения; поле ввода текста (0-255 символов).
- **Значение**
    - Поле ввода текста (0-255 символов).
    - Красная иконка урны позволяет удалять строки, кроме предустановленной.
    - Кнопка "Добавить" (Button 11) добавляет новую строку в таблицу.

---
## Описание таблицы Медиа файлы (Table 5)
Таблица "Медиа файлы" используется для управления документами и файлами, связанными с процессами или задачами.
## Подключенные компоненты: Слайдер REQ001
- **Слайдер** (Slider)
    - Слайдер предназначен для отображения изображений выбранной сущности. Он позволяет пользователю пролистывать все доступные изображения. 

### Особенности
- Позволяет просматривать, выбирать и добавлять файлы.
- Обеспечивает возможность печати выбранных файлов.

### Структура
- **№**
    - Поле отображения порядкового номера в таблице.
- **Файл**
    - Поле отображения названия файла.
- **Checkbox**
    - Поле выбора.
    - Позволяет выбрать все файлы в таблице или отметить отдельные строки.
    - При клике в заголовке столбца отмечаются все элементы, а при клике на отдельный чекбокс — только соответствующая строка.

### Функционал
- **Кнопка "Печать"** (Button 7)
    - Расположена под таблицей.
    - При нажатии открывается предпросмотр печати для отмеченных с помощью чекбоксов строк.
- **Поле "Прикрепить документ"** (Drag and Drop)
    - Позволяет добавлять новые файлы в таблицу путем перетаскивания или выбора файлов при клике на поле.
- **Кнопка "Добавить из базы"** (Button 10)
    - Кнопка для добавления файлов из базы.
    - При нажатии открывает модальное окно "База файлов", в котором можно добавить файлы из базы.

---
## Описание компонентов управления:
На экране расположены две кнопки управления: "Сохранить" и "В базу". Эти кнопки обеспечивают функциональность для работы с окном.

### Особенности
- **Фиксированное расположение**
    - Кнопки находятся внизу экрана для легкого доступа.

### Функционал
- **Сохранить** (Button 9)
    - **Назначение**: Сохраняет изменения и обновляет базу данных.
    - **Действие**: При нажатии данные сохраняются в базе.
    - **Уведомление**: При успешном сохранении данных всплывает уведомление об успешности операции.
- **В базу** (Button 10)
    - **Назначение**: Закрывает окно без сохранения изменений.
    - **Действие**: Окно закрывается, и база данных остаётся без изменений.
