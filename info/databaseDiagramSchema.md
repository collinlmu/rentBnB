// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table users {
    id integer [primary key]
    firstName varchar(256)
    lastName varchar(256)
    email varchar(256) [unique, not null]
    username varchar(256) [unique, not null]
    passwordHash varchar(256)
    createdAt timestamp
    updatedAt timestamp
  }

  Table spots {
    id integer [primary key]
    ownerId integer [ref: > users.id]
    address varchar
    city varchar
    state varchar
    lat decimal
    lng decimal
    name varchar
    description text
    price decimal
    createdAt timestamp
    updatedAt timestamp
    avgRating integer
    previewImage varchar
  }

  Table spotImages {
    id integer [primary key]
    spotId integer [ref: > spots.id]
    url varchar
    createdAt timestamp
    updatedAt timestamp
  }

  Table reviews {
    id integer [primary key]
    userId integer [ref: > users.id]
    spotId integer [ref: > spots.id]
    review text
    stars integer
    createdAt timestamp
    updatedAt timestamp
  }

  Table reviewImages {
    id integer [primary key]
    reviewId integer [ref: > reviews.id]
    url varchar
    createdAt timestamp
    updatedAt timestamp
  }

  Table bookings {
    id integer [primary key]
    userId integer [ref: > users.id]
    spotId integer [ref: > spots.id]
    startDate date
    endDate date
    createdAt timestamp
    updatedAt timestamp
  }
