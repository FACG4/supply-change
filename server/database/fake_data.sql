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

INSERT INTO social_enterprise_basic VALUES
(DEFAULT, 'THE NUMBER UK LIMITED1', '619001', 'Matt1', 'Davis1', 'mavis@gsg.com1', '004420723434561', DEFAULT, DEFAULT, '123456781'),
(DEFAULT, 'MercyCorps2', '000162', 'Mavis2', 'Davis2', 'mavs@mc.com2', '004430723434562', DEFAULT, DEFAULT, '123456782'),
(DEFAULT, 'GSMC3', '003063', 'Ramy3', 'Alsurfa3', 'ramy@gsg.com3', '004420763434563', DEFAULT, DEFAULT, '123456783'),
(DEFAULT, 'MCGO3', '000073', 'Dan3', 'Sofer3', 'dan@fandc.com3', '004420723424563', DEFAULT, DEFAULT, '123456783');

INSERT INTO social_enterprise_details VALUES
(DEFAULT, 1, 'Fusion Point', '61900', 'Matt', 'Functional Structure', 'Cleaning', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', '{2, 3}', '300', '50', '50k-100k', '50k-100k', 'We a small social enterprise', '{2}','{2,3}','London', '{"Greater London","North East"}'),
(DEFAULT, 2, 'permin street', '00116', 'Ramy', 'Matrix Structure', 'Catering', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', '{1, 2, 3}', '500', '60', '100-150k', '100-150k', 'We a small social enterprise', NULL,'{2,5}','Leeds','{"East Midlands","South East"}'),
(DEFAULT, 3, 'some street', '01412', 'HaMa', 'Hybrid Structure', 'Gardening & Landscaping', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', NULL, '200', '70', '150-250k', '150-250k', 'We a small social enterprise', '{2,3}','{1,3}','Sheffield','{"Yorkshire and the Humber"}'),
(DEFAULT, 4, 'Fusion Point1', '613900', 'Matt', 'Functional Structure1', 'Cleaning', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', '{2, 3}', '300', '50', '50k-100k', '50k-100k', 'We a small social enterprise', '{2}','{2,3}','London', '{"Greater London","North East"}'),
(DEFAULT, 5,'Fusion Point1', '6113900', 'Matt', 'Functional Structure2', 'Catering', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', '{2, 3}', '300', '50', '50k-100k', '50k-100k', 'We a small social enterprise', '{2}','{2,3}','London', '{"Greater London","North East"}'),
(DEFAULT, 6, 'Fusion Point1', '6900', 'Matt', 'Functional Structure3', 'Cleaning', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg', 'We are going to do some good', '{2, 3}', '300', '50', '50k-100k', '50k-100k', 'We a small social enterprise', '{2}','{2,3}','London', '{"Greater London","North East"}');
--//START// THESE ARE THE CONTRACT THAT SHOULD BE EXIST DURING THE SEARCH PROCESS

INSERT INTO contract VALUES
(DEFAULT, 'cleaning in Greater London', 'Cleaning', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the north area', 50100, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'North original', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','Greater London', '00971', DEFAULT),
(DEFAULT, 'Catering in Greater London', 'Catering', 'the company should have 50 employees or more...', 'contract about cleaning the houses in Greater London', 80200, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'South COMPANY', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tIxepXBe_3rNxRk5DvyV5YUQndkLzYU9fKouH-Uicu_77vxiQ','Greater London', '00971', DEFAULT),
(DEFAULT, 'Gardening & Landscaping in Greater London', 'Gardening & Landscaping', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the Greater London', 5000, 'this is going to help alot of people', '2018-09-07', DEFAULT, DEFAULT, 'South COMPANY2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3VLOE32JiFyx7gPXDOiIVE7AKVGO61Elalfsp3hp8IKWB_nI','Greater London', '00971', DEFAULT),

(DEFAULT, 'cleaning in South East', 'Cleaning', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the north area', 60100, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name33', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','South East', '00971', DEFAULT),
(DEFAULT, 'Catering in South East', 'Catering', 'the company should have 50 employees or more...', 'contract about cleaning the houses in South East', 80200, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name4', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','South East', '00971', DEFAULT),
(DEFAULT, 'Gardening & Landscaping in South East', 'Gardening & Landscaping', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the South East', 500000, 'this is going to help alot of people', '2018-09-07', DEFAULT, DEFAULT, 'Company Name3', 'https://bit.ly/2ALVqRH','South East', '00971', DEFAULT),

(DEFAULT, 'cleaning in South West', 'Cleaning', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the north area', 50100, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name5', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','South West', '00971', DEFAULT),
(DEFAULT, 'Catering in South West', 'Catering', 'the company should have 50 employees or more...', 'contract about cleaning the houses in South West', 80200, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name6', 'https://bit.ly/2ALVqRH','South West', '00971', DEFAULT),
(DEFAULT, 'Gardening & Landscaping in South West', 'Gardening & Landscaping', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the South West', 50500, 'this is going to help alot of people', '2018-09-07', DEFAULT, DEFAULT, 'Company Name7', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','South West', '00971', DEFAULT),

(DEFAULT, 'cleaning in West Midlands', 'Cleaning', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the north area', 50100, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name8', 'https://bit.ly/2njxcEM','West Midlands', '00971', DEFAULT),
(DEFAULT, 'Catering in West Midlands', 'Catering', 'the company should have 50 employees or more...', 'contract about cleaning the houses in West Midlands', 80200, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name9', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','West Midlands', '00971', DEFAULT),
(DEFAULT, 'Gardening & Landscaping in West Midlands', 'Gardening & Landscaping', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the West Midlands', 50500, 'this is going to help alot of people', '2018-09-07', DEFAULT, DEFAULT, 'Company Name10', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','West Midlands', '00971', DEFAULT),

(DEFAULT, 'cleaning in North West', 'Cleaning', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the north area', 50100, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name11', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','North West', '00971', DEFAULT),
(DEFAULT, 'Catering in North West', 'Catering', 'the company should have 50 employees or more...', 'contract about cleaning the houses in North West', 80200, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name12', 'https://bit.ly/2ALVqRH','North West', '00971', DEFAULT),
(DEFAULT, 'Gardening & Landscaping in North West', 'Gardening & Landscaping', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the North West', 50500, 'this is going to help alot of people', '2018-09-07', DEFAULT, DEFAULT, 'Company Name13', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','North West', '00971', DEFAULT),

(DEFAULT, 'cleaning in North East', 'Cleaning', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the north area', 50100, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name14', 'https://bit.ly/2vryUZl','North East', '00971', DEFAULT),
(DEFAULT, 'Catering in North East', 'Catering', 'the company should have 50 employees or more...', 'contract about cleaning the houses in North East', 80200, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name15', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','North East', '00971', DEFAULT),
(DEFAULT, 'Gardening & Landscaping in North East', 'Gardening & Landscaping', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the North East', 50500, 'this is going to help alot of people', '2018-09-07', DEFAULT, DEFAULT, 'Company Name16', 'https://bit.ly/2njxcEM','North East', '00971', DEFAULT),

(DEFAULT, 'cleaning in Yorkshire and the Humber', 'Cleaning', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the north area', 50100, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name17', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','Yorkshire and the Humber', '00971', DEFAULT),
(DEFAULT, 'Catering in Yorkshire and the Humber', 'Catering', 'the company should have 50 employees or more...', 'contract about cleaning the houses in Yorkshire and the Humber', 80200, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name18', 'https://bit.ly/2ALVqRH','Yorkshire and the Humber', '00971', DEFAULT),
(DEFAULT, 'Gardening & Landscaping in Yorkshire and the Humber', 'Gardening & Landscaping', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the Yorkshire and the Humber', 50500, 'this is going to help alot of people', '2018-09-07', DEFAULT, DEFAULT, 'Company Name19', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','Yorkshire and the Humber', '00971', DEFAULT),

(DEFAULT, 'cleaning in East Midlands', 'Cleaning', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the north area', 50100, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name20', 'https://s3-us-west-2.amazonaws.com/supply-change/selogo.jpg','East Midlands', '00971', DEFAULT),
(DEFAULT, 'Catering in East Midlands', 'Catering', 'the company should have 50 employees or more...', 'contract about cleaning the houses in East Midlands', 80200, 'this is going to help alot of people', '2018-08-07', DEFAULT, DEFAULT, 'Company Name21', 'https://bit.ly/2ALVqRH','East Midlands', '00971', DEFAULT),
(DEFAULT, 'Gardening & Landscaping in East Midlands', 'Gardening & Landscaping', 'the company should have 50 employees or more...', 'contract about cleaning the houses in the East Midlands', 50500, 'this is going to help alot of people', '2018-09-07', DEFAULT, DEFAULT, 'Company Name22', 'https://bit.ly/2vryUZl','East Midlands', '00971', DEFAULT);

--//END// THESE ARE THE CONTRACT THAT SHOULD BE EXIST DURING THE SEARCH PROCESS
