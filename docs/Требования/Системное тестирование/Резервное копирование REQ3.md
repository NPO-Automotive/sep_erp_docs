---
sidebar_position: 3
---

## Путь
Настройки (/settings) -> Сохранение баз данных, настроек, истории действий (/savebasedata)


## Описание
Страничка резервного копирования позволяет сохранить настройки и базу данных системы в текущем состоянии, откатить систему на предыдущее состояние с использованием ранее сохраненного файла резервной копии, а также удалить ранее сохраненные файлы резервных копий. Пользователь также может скачать файл резервной копии.

### Особенности
- **Сохранение текущего состояния**
    - Возможность создания резервной копии текущих настроек и базы данных системы для защиты данных и обеспечения их сохранности.
- **Откат на предыдущее состояние**
    - Возможность восстановления системы до состояния, сохраненного в ранее созданной резервной копии, что позволяет быстро вернуть систему в рабочее состояние после сбоев или ошибок.
- **Удаление резервных копий**
    - Возможность удаления ранее сохраненных файлов резервных копий для освобождения места на диске и управления данными.
- **Скачивание резервных копий**
    - Возможность скачивания файла резервной копии для локального хранения или переноса на другие устройства.
- **Счётчик записей**
    - Показывает общее количество копий в заголовке таблицы, что помогает оценить количество записей.

## #Функционал
- **Создание резервной копии**
    - Пользователь может создать резервную копию текущих настроек и базы данных системы.
    - Резервная копия должна включать все необходимые данные для полного восстановления системы.
- **Восстановление из резервной копии**
    - Пользователь может выбрать ранее сохраненный файл резервной копии и восстановить систему до состояния, сохраненного в этом файле.
    - Процесс восстановления должен быть простым и интуитивно понятным.
- **Удаление резервных копий**
    - Пользователь может удалить ранее сохраненные файлы резервных копий, которые больше не нужны.
    - Удаление должно быть подтверждено пользователем для предотвращения случайных удалений.
- **Скачивание резервных копий**
    - Пользователь может скачать файл резервной копии для локального хранения или переноса на другие устройства.
    - Файл резервной копии должен быть в формате, который легко восстанавливается системой.

## Макет
![Пример изображения странички BackUp](\img\BackUp.png)
![Пример изображения странички BackUp](\img\BackUp2.png)

| Элементы окна | Назначение |
|---|---|
|Table 1| Таблица Список резервных копий |
|Button 1| Позволяет сгенирировать новую копию сейчас |
|Button 2| Восстанавливает базу по выбранному элементу |
|Button 3| Удаляет запись из таблицы |
|Button 4| <span style={{color: "red"}}>TODO: она должна работать ?</span> |

---
## Описание таблицы резервных копий
Таблица резервных копий предназначена для отображения информации о созданных резервных копиях системы. Она включает в себя данные о дате и времени создания, полном названии и размере каждого файла резервной копии.

### Структура
Таблица резервных копий должна содержать следующие столбцы:
- **№**
    - Порядковый номер резервной копии.
- **Дата и Время**
    - Дата и время создания резервной копии.
- **Полное название**
    - Имя файла резервной копии.
    - Название при генерации следует определенным правилам: `psql_год-месяц-день_T_час_минута_секунда` исходя из даты и времени создания файла.
- **Размер**
    - Размер файла резервной копии.
    - Файлы могут быть сохранены только в формате .sql.gz (сжатый файл).

### Особенности
- **Стандартизированное именование**
    - Имена файлов резервных копий генерируются по определенным правилам, что обеспечивает их уникальность и упрощает идентификацию.
- **Сжатый формат**
    - Все файлы резервных копий сохраняются в сжатом формате .sql.gz, что экономит место на диске и ускоряет процесс передачи данных.
- **Заголовок с количеством**
    - Заголовок таблицы "Список резервных копий:" включает в себя количество резервных копий, что позволяет пользователю сразу видеть объем доступных резервных копий.

### Функционал
- **Отображение информации о резервных копиях**
    - Таблица предоставляет пользователю полную информацию о каждой резервной копии, включая порядковый номер, дату и время создания, полное название и размер файла.
- **Упрощенная идентификация**
    - Стандартизированное именование файлов позволяет легко идентифицировать и находить нужные резервные копии.
- **Эффективное использование дискового пространства**
    - Сжатый формат файлов (.sql.gz) позволяет экономить место на диске и обеспечивает более быструю передачу данных при скачивании или восстановлении.


---
## Описание компонентов управления
Компоненты управления резервным копированием реализованы в виде четырех кнопок: "Генерировать новую копию сейчас", "Запустить", "Уничтожить" и "Иконка". Эти кнопки позволяют пользователю эффективно управлять процессом создания, восстановления, удаления и выгрузки файлов резервных копий.

### Особенности
- **Интуитивный интерфейс**
    - Кнопки расположены логично, обеспечивая быстрый и легкий доступ к основным функциям управления резервными копиями.
- **Динамическое отображение**
    - Кнопки "Запустить", "Уничтожить" и "Иконка" появляются только после выбора файла в таблице, что предотвращает случайные действия и упрощает интерфейс.
- **Многофункциональность**
    - Каждая кнопка выполняет конкретную задачу, обеспечивая полный контроль над процессом резервного копирования и восстановления данных.

### Функционал
- **Генерировать новую копию сейчас**
    - **Описание**: Позволяет сохранить текущее состояние системы и базы данных.
    - **Функциональность**: Создает новую резервную копию, включающую все необходимые данные для полного восстановления системы.
- **Запустить**
    - **Описание**: Загружает выбранный файл резервной копии из таблицы.
    - **Функциональность**: 
        - Кнопка по умолчанию скрыта и появляется только после выбора файла в таблице.
        - Восстанавливает систему до состояния, сохраненного в выбранной резервной копии.
- **Уничтожить**
    - **Описание**: Удаляет выбранный файл резервной копии из таблицы.
    - **Функциональность**: 
        - Кнопка по умолчанию скрыта и появляется только после выбора файла в таблице.
        - Требует подтверждения пользователя для предотвращения случайных удалений.
- **Иконка**
    - **Описание**: Позволяет выгрузить выбранный файл резервной копии на локальный компьютер или другое устройство.
    - **Функциональность**: 
        - Кнопка по умолчанию скрыта и появляется только после выбора файла в таблице.
        - Обеспечивает удобство в хранении и переносе резервных копий.
