-- "Позвонить нам"
CREATE TABLE call_requests (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    comment TEXT
);

CREATE TABLE feedbacks (
    id SERIAL PRIMARY KEY,
    client_full_name VARCHAR(255) NOT NULL,
    coach_full_name VARCHAR(255) NOT NULL,
    comment TEXT
);
Ы
INSERT INTO call_requests (full_name, phone, comment) VALUES
('Иван Иванов Федотович', '+79991234567', 'Хочу узнать подробнее о ваших услугах.'),
('Анна Петрова Ярополкович', '+79997654321', 'Просьба перезвонить после 18:00.'),
('Сергей Сидоров Люпеивич', '+79991112233', 'Нужна консультация по продукту.');

INSERT INTO feedbacks (client_full_name, coach_full_name, comment) VALUES
('Иван Иванов Иванович', 'Макарова Диана Федоровна', 'Стесняюсь, что слабее, на вид хрупкой, девушки, однако меня это мотивирует становиться сильнее, спасибо за возможность развиваться.'),
('Мария Петрова Вениаминовна','Красильников Мирослав Андреевич', 'Зравствуйте, мне 45 лет. Очень красивый тренер, безумно нравятся его формы.'),
('Алексей Смирнов Ильич', 'Родионов Тимофей Денисович', 'Хороший клуб, хороший тренер всем доволен!');