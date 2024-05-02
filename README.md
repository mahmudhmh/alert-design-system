# Alert Design System using React with TypeScript and SASS Preprocessor

## Introduction

This repository contains a React component-based Alert Design System built with TypeScript and SASS preprocessor for styling. The system utilizes Lucide icons for alert symbols and adheres to two SOLID principles:

- Single Responsibility Principle (SRP)
- Open-Closed Principle (OCP).

## Components

The Alert Design System consists of the following React components:

### `Alert`

The `Alert` component serves as the main container for displaying various types of alerts. It accepts props and children for configuring the alert's type, header icon, title, and optional description. The component encapsulates the alert's visual presentation and behavior.

### `AlertType`

The `AlertType` type defines the different types of alerts supported by the system, including `alert-default`, `alert-info`, `alert-danger`, `alert-success`, and `alert-warning`. This type helps maintain consistency and clarity when specifying the type of alert.

## Styles

The alert system utilizes SASS preprocessor for CSS styling, enhancing maintainability and organization of stylesheets. Each alert type is styled separately to ensure visual consistency and flexibility for future modifications. SASS variables and mixins are employed to promote code reusability and scalability.

## Usage

To use the Alert Design System in your React application:

1. Install the necessary dependencies:

   ```bash
   npm install lucide-react sass
   ```

2. Import the `Alert` component and required Lucide icons into your application:

   ```javascript
   import Alert from "./components/ui/Alert/Alert";
   import {
     BellRing,
     Info,
     Ban,
     CheckCheck,
     TriangleAlert,
   } from "lucide-react";
   ```

3. Incorporate the `Alert` component within your application, specifying the desired alert type, header icon, title, and optional description.

   ```jsx
   <Alert
     type={"alert-default"}
     headerIcon={<BellRing size={20} />}
     title="Upgrade your plan"
     description?="Optional field can be neglected and use the children props instead"
   >
     {/* Alert content */} if(need to use children)
   </Alert>
   ```

4. Customize the alert styling by modifying the SASS variables and mixins according to your design requirements.

## Conclusion

The Alert Design System provides a robust foundation for displaying various types of alerts in React applications. By adhering to SOLID principles, utilizing TypeScript for type safety, employing SASS preprocessor for styling, and integrating Lucide icons for visual representation, the system offers flexibility, maintainability, and scalability for alert management.
