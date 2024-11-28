// api/index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const data = {
  properties: [
    {
      id: "1",
      title: "Modern Downtown Apartment",
      price: 2500,
      location: {
        address: "123 Main St",
        city: "San Francisco",
        state: "CA",
        coordinates: {
          latitude: 37.7749,
          longitude: -122.4194,
        },
      },
      features: ["2 Bedrooms", "2 Bathrooms", "Parking", "Pool"],
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
      ],
    },
    {
      id: "2",
      title: "Luxury Beach House",
      price: 5000,
      location: {
        address: "456 Ocean Ave",
        city: "Malibu",
        state: "CA",
        coordinates: {
          latitude: 34.0259,
          longitude: -118.7798,
        },
      },
      features: ["4 Bedrooms", "3 Bathrooms", "Beachfront", "Private Pool"],
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      ],
    },
  ],
  bookings: [
    {
      id: "1",
      propertyId: "1",
      userId: "user1",
      checkIn: "2024-02-01",
      checkOut: "2024-02-05",
      status: "confirmed",
    },
  ],
  profile: {
    id: "user1",
    name: "John Doe",
    email: "john@example.com",
    bookings: ["1"],
  },
};

// Middleware
app.use(express.json());

// Routes
// Get all properties
app.get("/api/properties", (req, res) => {
  res.json(data.properties);
});

// Get profile
app.get("/api/profile", (req, res) => {
  res.json(data.profile);
});

// Get booking by ID
app.get("/api/booking/:id", (req, res) => {
  const booking = data.bookings.find((b) => b.id === req.params.id);
  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }
  res.json(booking);
});

//Get Property by ID
app.get("/api/properties/:id", (req, res) => {
  const property = data.properties.find((p) => p.id === req.params.id);
  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }
  res.json(property);
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
