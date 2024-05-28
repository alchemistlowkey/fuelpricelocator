# Fuel Price Locator

## Introduction

Fuel Price Locator is an innovative application designed to help users find the most affordable petroleum products in their vicinity. This platform leverages user-generated data to provide real-time updates on fuel prices, enabling users to make informed decisions about where to purchase fuel.

## Key Features

1. Real-Time Price Updates:

- Users can view the latest fuel prices at different stations in their area.
- Prices are updated in real-time through user contributions.

2. User Contributions:

- Anyone can update fuel prices at stations they visit.
- The app encourages users to contribute by making the process quick and easy.

3. Search Functionality:

- Users can search for fuel prices by location, fuel type, or specific gas stations.
- Filters can be applied to sort by the cheapest prices, closest locations, and more.

4. Community Collaboration:

- A community-driven approach ensures that the data remains current and comprehensive.
- Users can rate and comment on gas stations, providing additional insights (**to be implemented in future**).

5. Price Alerts:

- Users can set up alerts to notify them when fuel prices drop below a certain threshold (**to be implemented in future**).
- Notifications can be tailored to specific locations or fuel types (**to be implemented in future**).

6. User Profiles (**to be implemented in future**):

- Each user has a profile that tracks their contributions.
- Profiles can display badges and achievements to recognize active contributors.

![search](https://github.com/alchemistlowkey/fuelpricelocator/assets/46524038/f2eb9908-13a8-421e-b9aa-59251c670622)
![List](https://github.com/alchemistlowkey/fuelpricelocator/assets/46524038/0425fbf7-411e-4398-ac22-333bd274ff3b)
![2024-05-28_1](https://github.com/alchemistlowkey/fuelpricelocator/assets/46524038/4df729d0-260d-46e6-9feb-a23ee76932c6)

## Technical Details

### Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/alchemistlowkey/fuelpricelocator.git
```

2. Navigate to the project directory:

```bash
cd fuelpricelocator
```

3. Install the dependencies:

```bash
npm install
```

4. Start the svelte/front-end server

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080).

To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

5. Navigate to the backend directory

```bash
cd backend
```

6. Start the NodeJS/Express Server

```bash
npm start
```

Now your front-end and backend should be integrated as well as your mongoDB database connected
Don't forget to create a .env file to store your variables like.
