CREATE TABLE IF NOT EXISTS products (
  id            INT    NOT NULL PRIMARY KEY,
  campus        TEXT   NOT NULL,
  name          TEXT   NOT NULL,
  slogan        TEXT   NOT NULL,
  description   TEXT   NOT NULL,
  category      TEXT   NOT NULL
);

CREATE TABLE IF NOT EXISTS features (
  id            INT    NOT NULL PRIMARY KEY,
  feature       TEXT   NOT NULL,
  value         TEXT   NOT NULL,
  product_id    INT    NOT NULL,
  FOREIGN KEY (product_id)
    REFERENCES products (id)
);

CREATE TABLE IF NOT EXISTS styles (
  id                INT       NOT NULL PRIMARY KEY,
  name              TEXT      NOT NULL,
  original_price    NUMERIC   NOT NULL,
  sale_price        TEXT,
  default_style     BOOLEAN   NOT NULL,
  product_id        INT       NOT NULL,
  FOREIGN KEY (product_id)
    REFERENCES products (id)
);

CREATE TABLE IF NOT EXISTS photos (
  id              INT       NOT NULL PRIMARY KEY,
  thumbnail_url   TEXT,
  url             TEXT,
  styles_id       INT       NOT NULL,
  FOREIGN KEY (styles_id)
    REFERENCES styles (id)
);

CREATE TABLE IF NOT EXISTS skus (
  id            INT       NOT NULL PRIMARY KEY,
  quantity      INT       NOT NULL,
  size          TEXT      NOT NULL,
  style_id     INT        NOT NULL,
  FOREIGN KEY (style_id)
    REFERENCES styles (id)
);