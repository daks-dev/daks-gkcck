PRAGMA foreign_keys = off;
BEGIN TRANSACTION;


DROP TABLE IF EXISTS partners;
CREATE TABLE partners (
  id         INTEGER  PRIMARY KEY NOT NULL,
  name       TEXT     NOT NULL,
  email      TEXT,
  telephone  TEXT,
  address    TEXT,
  url        TEXT,
  title        TEXT,
  description  TEXT,
  projects   INTEGER,
  priority   INTEGER,
  hidden     INTEGER
);


INSERT INTO partners ( id, name, email, telephone, address, url ) VALUES (
  1,
  'MR group',
  'info@mr-group.ru',
  '+7 (495) 514-15-14',
  '123112, Москва, 1-й Красногвардейский проезд, д. 22, стр. 1 (Бизнес-центр Neva Towers, башня Т1)',
  'mr-group.ru'
);

INSERT INTO partners ( id, name, email, telephone, address, url ) VALUES (
  2,
  'ОАО «ГПЗ-2 Тверь» ',
  'tver@2-gpz.ru',
  '+7 (4822) 79-66-61',
  '170100, Россия, Тверская область, г. Тверь, ул. Индустриальная, 11',
  '2-gpz.ru'
);

INSERT INTO partners ( id, name ) VALUES (
  3,
  'ООО УК «Столица Менеджмент»'
);

INSERT INTO partners ( id, name, telephone, address, url ) VALUES (
  4,
  'ДОНСТРОЙ',
  '+7 (495) 925-47-47',
  '119590, Москва, ул. Мосфильмовская, д. 70',
  'donstroy.moscow'
);

INSERT INTO partners ( id, name ) VALUES (
  5,
  'Первый ДСК'
);

INSERT INTO partners ( id, name ) VALUES (
  6,
  'Группа компаний ФСК'
);

INSERT INTO partners ( id, name ) VALUES (
  7,
  'Seven Suns Development'
);

INSERT INTO partners ( id, name ) VALUES (
  8,
  'Группа ПСН'
);

INSERT INTO partners ( id, name ) VALUES (
  9,
  'ГК «Инград»'
);

INSERT INTO partners ( id, name, hidden ) VALUES (
  10,
  'Администрация ГО Клин ',
  1
);

INSERT INTO partners ( id, name, hidden ) VALUES (
  11,
  'АО «Стройсервисбыт»',
  1
);

/*
INSERT INTO partners ( id, name ) VALUES (
  ?,
  ''
);
*/

DROP INDEX IF EXISTS [partners.name];
CREATE UNIQUE INDEX [partners.name] ON partners (
    name ASC
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
