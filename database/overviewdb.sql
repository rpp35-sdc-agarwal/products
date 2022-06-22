CREATE TABLE IF NOT EXISTS products (
  id            INT    NOT NULL PRIMARY KEY,
  name          TEXT   NOT NULL,
  slogan        TEXT   NOT NULL,
  description   TEXT   NOT NULL,
  category      TEXT   NOT NULL,
  default_price INT    NOT NULL
);

CREATE TABLE IF NOT EXISTS features (
  id            INT    NOT NULL PRIMARY KEY,
  product_id    INT    NOT NULL,
  feature       TEXT   NOT NULL,
  value         TEXT   NOT NULL,
  FOREIGN KEY (product_id)
    REFERENCES products (id)
);

CREATE TABLE IF NOT EXISTS styles (
  id                INT       NOT NULL PRIMARY KEY,
  productId         INT       NOT NULL,
  name              TEXT      NOT NULL,
  sale_price        TEXT,
  original_price    INT       NOT NULL,
  default_style     INT       NOT NULL,
  FOREIGN KEY (productId)
    REFERENCES products (id)
);

CREATE TABLE IF NOT EXISTS photos (
  id              INT       NOT NULL PRIMARY KEY,
  styleId         INT       NOT NULL,
  url             TEXT,
  thumbnail_url   TEXT,
  FOREIGN KEY (styleId)
    REFERENCES styles (id)
);

CREATE TABLE IF NOT EXISTS skus (
  id            INT       NOT NULL PRIMARY KEY,
  styleId       INT       NOT NULL,
  quantity      INT       NOT NULL,
  size          TEXT      NOT NULL,
  FOREIGN KEY (styleId)
    REFERENCES styles (id)
);

CREATE TABLE IF NOT EXISTS cart (
  id            INT       NOT NULL PRIMARY KEY,
  user_session  INT       NOT NULL,
  product_id    INT       NOT NULL,
  active        INT       NOT NULL,
  FOREIGN KEY (product_id)
    REFERENCES products (id)
);