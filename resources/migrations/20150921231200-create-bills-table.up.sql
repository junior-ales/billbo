CREATE TABLE bills (
  bill_id VARCHAR(50) NOT NULL,
  issued_by VARCHAR(100) NOT NULL,
  total_amount NUMERIC(20,2) NOT NULL,
  due_date DATE NOT NULL,
  current_status VARCHAR(20) NOT NULL,
  bill_picture VARCHAR NOT NULL,
  created_by VARCHAR(50) NOT NULL,
  created_time TIMESTAMP NOT NULL,
  last_updated_by VARCHAR(50) NOT NULL,
  last_updated_time TIMESTAMP NOT NULL,
  CONSTRAINT pk_bill PRIMARY KEY (bill_id),
  CONSTRAINT valid_status CHECK ( current_status IN ('open', 'reserved', 'paid') )
);
