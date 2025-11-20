# Investment Calculator (Angular)

This project is a simple **investment growth calculator** built with **Angular 18**.  
It allows the user to enter investment-related information and instantly view the calculated results in a clear and structured output table.

## 📌 Project Overview
The application calculates how an investment grows over a selected number of years.  
The user enters the following values:

- **Initial Investment**
- **Annual Investment**
- **Expected Annual Return (percentage)**
- **Investment Duration (years)**

After submitting the form, the calculator displays a year-by-year breakdown including:

- Investment value at the start of the year  
- Annual interest (growth)  
- Total value after interest  
- Accumulated overall balance  

The calculation logic is fully handled inside a dedicated Angular service.

---

## 🧩 Architecture & Components

### **1. App Component**
- Holds the main layout of the application.
- Connects the form component with the results component.
- Uses the `InvestmentResultService` to retrieve calculated results.

### **2. Investment Form Component**
- Contains the input fields and submit button.
- Collects user data and sends it to the service for processing.

### **3. Results Table Component**
- Displays the calculated investment growth in a table format.
- Subscribes to the service to get updated results whenever the user submits new values.

### **4. InvestmentResultService**
- Core business logic of the app.
- Calculates investment growth per year.
- Stores results and exposes them through an observable.
- Replaced the old `@Input()` and `@Output()` communication method with a cleaner shared service design.

---

## 🔧 Technologies Used
- **Angular 18 (standalone components)**
- **TypeScript**
- **Angular Forms**
- **Services for shared state and calculation logic**
- **Basic table rendering with HTML & CSS**

---

## 🚀 How It Works

1. User enters their investment data.
2. The form component sends this data to the `InvestmentResultService`.
3. The service calculates the investment growth using compound interest.
4. The results component listens to the service and updates the UI automatically.
5. The table displays each year’s:
   - Starting balance  
   - Annual interest  
   - End-of-year balance  
   - Total accumulated value  
