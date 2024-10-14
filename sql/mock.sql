INSERT INTO phones (name, description, carrier_id, number, document) VALUES 
    ('Home', 'Anne''s home telephone', 1, '41152823316', '23004511792'),
    ('Mobile', 'Anne''s mobile smartphone', 1, '95546160847', '23004511792'),
    ('Work', 'Anne''s work smartphone', 2, '39195253851', '23004511792'),
    ('Mine', 'Bob''s personal smartphone', 4, '14971669004', '48192719000'),
    ('Mom', 'Bob''s mom''s home telephone', 4, '84878651947', '48192719000');

INSERT INTO recharges (phone_id, value, date) VALUES
    (1, 30, '2024-10-08'),
    (2, 100, '2024-10-10'),
    (3, 200, '2024-09-21'),
    (4, 15, '2024-09-20'),
    (5, 50, '2024-09-02'),
    (2, 40, '2024-09-25'),
    (4, 30, '2024-10-07'),
    (5, 50, '2024-10-13'),
    (2, 100, '2024-10-13');
