create TABLE type_product(
    type_id SERIAL PRIMARY KEY,
    category varchar(255),
    description varchar(255),
    image varchar(255)
);

create TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type_id INTEGER,
    weight INTEGER,
    price INTEGER,
    FOREIGN KEY (type_id) REFERENCES type_product(type_id)
);

create TABLE ed_izm(
    id SERIAL PRIMARY KEY,
    ed_izm varchar(255)
);
create TABLE customer(
    id SERIAL PRIMARY KEY,
    zakazchik varchar(255),
    adress varchar(255),
    phone varchar(255),
    index varchar(255),
    inn varchar(255),
    rasCh varchar(255)
);

create TABLE driver(
    id SERIAL PRIMARY KEY,
    fio varchar(255),
    birthday date,
    work_phone varchar(255),
    work_day date,
    home_phone varchar(255),
    pasport varchar(255),
    adress varchar(255),
    drLicense varchar(25)
);
create TABLE employee(
    id SERIAL PRIMARY KEY,
    fio varchar(255),
    home_phone varchar(255),
    work_day date,
    birthday date,
    pasport varchar(255)
);
create TABLE ttn(
    id SERIAL PRIMARY KEY,
    zakazchik INTEGER,
    driver INTEGER,
    employee INTEGER,
    registr_day date,
    FOREIGN KEY (zakazchik) REFERENCES customer(id),
    FOREIGN KEY (driver) REFERENCES driver(id),
    FOREIGN KEY (employee) REFERENCES employee(id)
);
create TABLE spec_ttn(
    id SERIAL PRIMARY KEY,
    ttn_id INTEGER ,
    product_id INTEGER,
    count INTEGER,
    total_price INTEGER,
    FOREIGN KEY (ttn_id) REFERENCES ttn(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);