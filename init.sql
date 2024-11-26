-- "Позвонить нам"
CREATE TABLE call_requests (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    comment TEXT
);

INSERT INTO call_requests (full_name, phone, comment) VALUES
('Иван Иванов', '+79991234567', 'Хочу узнать подробнее о ваших услугах.'),
('Анна Петрова', '+79997654321', 'Просьба перезвонить после 18:00.'),
('Сергей Сидоров', '+79991112233', 'Нужна консультация по продукту.');