BEGIN;

DROP TABLE IF EXISTS social_enterprise_basic, social_enterprise_details, contract, policy, social_impact_list; 
DROP TYPE IF EXISTS regions, trade_type, turnover_size, contract_size, social_mission, uk_cities;

CREATE TYPE regions AS ENUM(
    'Greater London',
    'South East', 
    'South West', 
    'West Midlands', 
    'North West', 
    'North East', 
    'Yorkshire and the Humber', 
    'East Midlands'
);

CREATE TYPE trade_type AS ENUM(
    'Catering',
    'Cleaning',
    'Gardening & Landscaping'
);

CREATE TYPE turnover_size AS ENUM(
    'Turnover <50k',
    '50k-100k',
    '100-150k',
    '150-250k',
    '300k +'
);

CREATE TYPE contract_size AS ENUM(
    'Less than 50k',
    '50k-100k',
    '100-150k',
    '150-250k',
    '300k +'
);

CREATE TYPE social_mission AS ENUM(
    'employment',
    'disability support',
    'mental health',
    'health and wellbeing',
    'poverty premium',
    'digital inclusion',
    'financial inclusion',
    'youth employment',
    'community regeneration'
);

CREATE TYPE uk_cities AS ENUM(
    'London',
    'Birmingham',
    'Leeds',
    'Glasgow',
    'Sheffield',
    'Greater London',
    'South East', 
    'South West', 
    'West Midlands', 
    'North West', 
    'North East', 
    'Yorkshire and the Humber', 
    'East Midlands'
);

CREATE TABLE social_enterprise_basic(
    id SERIAL PRIMARY KEY,
    SE_name VARCHAR UNIQUE NOT NULL,
    SE_house_NO VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    phone_number VARCHAR UNIQUE NOT NULL,
    mailing_list BOOLEAN DEFAULT FALSE,
    is_complete BOOLEAN DEFAULT FALSE,
    password VARCHAR NOT NULL CHECK(CHAR_LENGTH(password) >= 8)
);

CREATE TABLE social_enterprise_details(
    id SERIAL,
    SE_id INT PRIMARY KEY NOT NULL REFERENCES social_enterprise_basic(id) ON DELETE CASCADE ON UPDATE CASCADE,
    SE_address VARCHAR NOT NULL,
    SIC_code INT NOT NULL, 
    director VARCHAR NOT NULL,
    company_structure VARCHAR NOT NULL,
    trade_type trade_type NOT NULL,
    logo_link VARCHAR NOT NULL,
    social_impact_description TEXT NOT NULL,
    social_impact_list INT[],
    travel_distance INT NOT NULL,
    employees_NO INT NOT NULL,
    turnover turnover_size,
    contract_size contract_size NOT NULL,
    SE_description TEXT NOT NULL,
    selected_contract INT[],
    policy_general INT[],
    location uk_cities NOT NULL,
    places_to_work_in regions[] NOT NULL    
);

CREATE TABLE social_impact_list(
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL
);

CREATE TABLE policy(
    id SERIAL PRIMARY KEY,
    question VARCHAR NOT NULL
);

CREATE TABLE contract(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    category trade_type NOT NULL,
    contract_spec TEXT NOT NULL,
    contract_description TEXT NOT NULL,
    value INT NOT NULL,
    social_impact_description TEXT NOT NULL,
    start_date DATE NOT NULL, 
    open_for_splitting BOOLEAN DEFAULT FALSE,
    active_state BOOLEAN DEFAULT TRUE, 
    company_name VARCHAR UNIQUE NOT NULL,
    company_logo VARCHAR NOT NULL,
    company_email VARCHAR NOT NULL,
    contract_region regions NOT NULL,
    post_code VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
