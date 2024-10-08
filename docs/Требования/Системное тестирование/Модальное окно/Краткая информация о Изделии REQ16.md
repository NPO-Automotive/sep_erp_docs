---
sidebar_position: 16
---

## Путь
Склад (/sclad) -> Комплектация сборок на план (/completcbed) -> Двойной клик на Наименование сущности

## Описание
Модальное окно предоставляет подробную информацию о выбранной сущности, включая краткую спецификацию, основные характеристики и документы.

### Особенности
- **Интуитивный интерфейс** 
    - Легкий доступ к ключевой информации о сущности.
- **Визуальное представление**
    - Отображение изображения для лучшего восприятия.
- **Документация**
    - Доступ к прикрепленным документам для детального изучения.

### Функционал
- **Основная информация**
  - Наименование и артикул.
  - Изображение детали.
- **Технические данные**
  - Краткая спецификация и характеристики.
  - Параметры детали.
- **Документы**
  - Просмотр прикрепленных документов.
- **Дополнительные возможности**
  - Просмотр полной информации и спецификации.
  - Изучение технологического процесса.
  - Определение принадлежности детали.

---
## Требования
- **Просмотр информации**
  - Пользователь должен иметь возможность просматривать краткую информацию об изделии.
  - Возможность просматривать полную информацию об изделии.
- **Изображения**
  - Пользователь должен иметь возможность просматривать все изображения выбранного изделия.
- **Спецификация**
  - Возможность просматривать как краткую, так и подробную спецификацию изделия.
- **Документы**
  - Пользователь должен иметь возможность просматривать прикрепленные документы изделия.
  - Возможность распечатать прикрепленные документы.
- **Примечания**
  - Пользователь должен иметь возможность записать примечание или описание о изделии.
- **Технологический процесс**
  - Возможность просматривать технологический процесс изделия.
- **Принадлежность**
  - Пользователь должен иметь возможность просматривать принадлежность выбранной сущности.

---
## Макет
![Пример изображения модального окна Краткая информация о изделии](\img\CompleteSetOfAssemblies\BriefInformationAboutTheProduct.png)

| Элементы окна | Назначение |
|---|---|
|Slider| Отображает изображение выбранной сущности |
|Button 1| Открывает окно "Обновление Изделия" |
|Button 2| Открывает модальное окно полной спецификации сущности |
|Button 3| Отправляет выбранный файл из таблицы "Документы" в печать |
|Button 4| Отправляет все файлы из таблицы "Документы" на печать |
|Button 5| Позволяет скомплектовать в набор |
|Button 6| Позволяет скомплектовать в набор |
|Table 1| Открывает модальное окно "Технологический процесс" |
|Table 2| Раскрывает информацию о принадлежности выбранной сущности |
|Input 1| Поле ввода |

---
## Подключенные компоненты:
### Слайдер (REQ001)
Слайдер (Slider) предназначен для отображения изображений выбранной сущности. Он позволяет пользователю пролистывать все доступные изображения. 

---
## Спецификация Изделия
Отображает краткую спецификацию выбранной сущности в виде таблицы (Table 1). Таблица содержит следующие колонки: **№**, **Обозначение**, **Наименование**, **Ед.**, **Кол-во**. 

Таблица разделена на следующие категории:
- **Сборочные Единицы (Тип СБ)**
- **Детали (Тип Д)**
- **Стандартные или покупные детали (Тип ПД)**
- **Расходные материалы (Тип РМ)**

### Структура
- **№**
    - Порядковый номер в таблице.
- **Обозначение**
    - Обозначение сущностей.
- **Наименование**
    - Наименование сущностей.
- **Ед.**
    - Единица измерения сущности.
- **Кол-во**
    - Количество сущности.

<span style={{color: "red"}}>TODO: Характеристики и Параметры отображатся в модальном окне, как лучше описывать такой текст</span>

## Характеристики
- **Рекомендуемый остаток (шт):**
    - Показывает рекомендуемое количество в штуках для выбранной сущности.
- **Минимальный остаток (шт):**
    - Отображает минимально допустимое количество в штуках для выбранной сущности.
## Параметры
- **Норма времени на сборку (ч):** 
    - Указывает стандартное время в часах, необходимое для сборки выбранной сущности.
## Описание / Примечание
- **Поле ввода описания/примечания:** 
  - Тип данных: Varchar (0-255)
  - Возможность изменять размер поля.

---
## Описание таблицы Документы (Table 2)
Таблица *Документы* отображает все прикрепленные файлы, связанные с выбранной сущностью, в виде таблицы.

### Структура
- **№**
    - Порядковый номер файла в таблице.
- **Файл**
    - Название и ссылка на прикрепленный файл.

### Особенности
- Табличное представление данных для удобного просмотра и управления файлами.
- Возможность выбора отдельных файлов для дальнейших действий.

### Функционал
- **Печать Выборочно** (Button 3)
    - Позволяет отправить на печать выбранные файлы.
- **Печать Всего** (Button 4)
    - Отправляет на печать все файлы, представленные в таблице.

---
## Полная информация (Button 1)
Кнопка (Button 1), открывающая окно с обновленной информацией об изделии. Позволяет пользователю получить актуальные данные и вносить изменения.

### Особенности
- Реализована в виде кнопки (Button 1).
- Открывает новое окно "Обновление Изделия".
- Предоставляет доступ к актуальным данным.

### Функционал
- **Функция**
  - Открытие нового окна "Обновление Изделия" для просмотра и редактирования актуальной информации сущности.
- **Действия**
  - При нажатии происходит открытие модального окна "Обновление Изделия".

---
## Полная спецификация (Button 2)
Кнопка (Button 2) для доступа к детальной спецификации выбранной сущности. Обеспечивает полную спецификации сущности.

### Особенности
- Реализована в виде кнопки (Button 2).
- Открывает модальное окно "Полная спецификация".
- Показывает полную спецификацию выбранной сущности.

### Функционал
- **Функция**
  - Открытие модального окна "Полная спецификация" для отображения детальной информации о выбранной сущности.
- **Действия**
  - При нажатии происходит открытие модального окна "Полная спецификация".

---
## Описание "Технологический процесс + `(Количество операций выбранной сущности)`" (Button 5)
Кнопка (Button 5), позволяющая просмотреть технологический процесс с указанием количества операций. Подчеркивает важные этапы производства и помогает в планировании.

### Особенности
- Реализована в виде кнопки (Button 5).
- Текст подсвечивается при наведении курсора.
- Открывает модальное окно "Технологический процесс".
- Указывает количество операций для выбранной сущности.

### Функционал
- **Функция**
  - Демонстрирует этапы и количество операций для выбранной сущности.
- **Действия**:
  - Наведение курсора подсвечивает текст.
  - При нажатии происходит открытие модального окна "Технологический процесс" для показа этапов и количества операций.

---
## Описание "Принадлежность" (Button 6)
Кнопка "Принадлежность" (Button 6) предназначена для отображения информации о родительских сущностях выбранной сущности.\
При наведении курсора текст кнопки подсвечивается.\
При нажатии кнопка раскрывает список родителей данной сущности с указанием их количества в данном разделе, а также предоставляет возможность сохранить данные о родителях в виде отчета в формате EXCEL.

### Особенности
- **Подсветка при наведении**: Текст кнопки "Принадлежность" подсвечивается при наведении курсора, что улучшает визуальное восприятие и подчеркивает интерактивность элемента.
- **Раскрытие списка родителей**: При нажатии на кнопку раскрывается список родительских сущностей выбранной сущности с указанием их количества, что позволяет пользователю быстро получить необходимую информацию.
- **Сохранение в формате EXCEL**: Кнопка "Сохранить в виде отчета EXCEL" позволяет пользователю сохранить данные о родительских сущностях в виде отчета в формате EXCEL для дальнейшего анализа и использования.

### Функционал
- **Подсветка текста при наведении**
    - При наведении курсора на кнопку "Принадлежность" текст кнопки подсвечивается, что указывает на возможность взаимодействия.
- **Раскрытие списка родителей**
    - При нажатии на кнопку "Принадлежность" раскрывается список родительских сущностей выбранной сущности.
    - В списке указывается количество родительских сущностей в данном разделе.
- **Сохранение данных в формате EXCEL**
    - Кнопка "Сохранить в виде отчета EXCEL" позволяет пользователю сохранить данные о родительских сущностях в виде отчета в формате EXCEL.
    - Отчет включает всю необходимую информацию о родительских сущностях для дальнейшего анализа и использования.
