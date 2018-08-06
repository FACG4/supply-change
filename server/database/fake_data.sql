INSERT INTO social_impact_list VALUES
(DEFAULT, 'We are primarily dedicated to social or environmental mission as evidenced by our governing documents'),
(DEFAULT, 'At least 51% of our profit is dedicated to the social and environmental mission'),
(DEFAULT, 'We can demonstrate social/environmental impact ');

INSERT INTO policy VALUES
(DEFAULT, 'Do you have a Health & Safety Policy?'),
(DEFAULT, 'Do you have a Safety Schemes in Procurement (SSIP) accreditation?'),
(DEFAULT, 'Do you have an equality & diversity policy?'),
(DEFAULT, 'Do you have a CSR / Environmental policy?'),
(DEFAULT, 'Do you have a Data Protection Policy?'),
(DEFAULT, 'Do you have a quality assurance certification relevant to the trade you registered for? (e.g ISO 9001:2000)');

INSERT INTO social_enterprise_basic VALUES
(DEFAULT, 'THE NUMBER UK LIMITED s', '61900', 'Matt', 'Davis', 'mm@gsg.com', '0044207243456', DEFAULT, DEFAULT, '$2a$08$zvbcrzJJmrKPi/Bn04b8GOUP7kbZq3YDmO1eUmn9QvSE0Zi7AQaKu'),
(DEFAULT, 'MercyCorps', '00016', 'Mavis', 'Davis', 'mavs@mc.com', '00443072343456', DEFAULT, DEFAULT, '12345678'),
(DEFAULT, 'GSMC', '00306', 'Ramy', 'Alsurfa', 'ramy@gsg.com', '00442076343456', DEFAULT, DEFAULT, '12345678'),
(DEFAULT, 'MCGO', '00007', 'Dan', 'Sofer', 'dan@fandc.com', '00442072342456', DEFAULT, DEFAULT, '12345678');

INSERT INTO social_enterprise_details VALUES
(DEFAULT, 1, 'Fusion Point', '61900', 'Matt', 'Functional Structure', 'Cleaning', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', '{2, 3}', '300', '50', '50k-100k', '50k-100k', 'We a small social enterprise', '{2}','{2,3}','London', '{"Greater London","North East"}'),
(DEFAULT, 2, 'permin street', '00116', 'Ramy', 'Matrix Structure', 'Catering', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', '{1, 2, 3}', '500', '60', '100-150k', '100-150k', 'We a small social enterprise', NULL,'{2,5}','Leeds','{"East Midlands","South East"}'),
(DEFAULT, 3, 'some street', '01412', 'HaMa', 'Hybrid Structure', 'Gardening & Landscaping', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', NULL, '200', '70', '150-250k', '150-250k', 'We a small social enterprise', '{2,3}','{1,3}','Sheffield','{"Yorkshire and the Humber"}');

INSERT INTO contract VALUES
(DEFAULT, 'cleaning in north area', 'Cleaning', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the north area', 50000, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'North original', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','North East', '00971', DEFAULT),
(DEFAULT, 'Catering in  area', 'Catering', 'the company should have 50 employees or more...', 'contract about Catering the houses in the north area', 100000, 'this is going to help alot of people', '2018-08-06', DEFAULT, DEFAULT, 'North comp iginal', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'South East', '01971', DEFAULT),
(DEFAULT, 'Gardening in north area', 'Gardening & Landscaping', 'the company should have 50 employees or more...', 'contract about Gardening & Landscaping the houses in the north area', 150000, 'this is going to help alot of people', '2018-10-05', DEFAULT, DEFAULT, 'North ginal', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'Yorkshire and the Humber', '04971', DEFAULT);
