# Restaurant_Menu_App

Part 2

In this part of the project, several enhancements were made to improve the design and functionality of the Restaurant Menu App:
• Added consistent rounded buttons with a custom color scheme (#D7903F).
• Introduced a reusable style design for all app buttons.
• Added new images to the Home, Add Item, and Filter screens for visual enhancement.
• Improved navigation between screens (Home, Add Item, Filter).

1. Screens Overview
• Home Screen: Displays menu items, total count, and navigation buttons.
• Add Item Screen: Allows the user to input dish details and save them to the menu.
• Filter Screen: Filters menu items by course and displays two sample images side by side

2. Testing and Deployment
The app was tested using Expo Go on both Android and iOS devices to ensure consistent performance. All screens, navigation routes, and image components were verified to work correctly.

3. Conclusion
This phase focused on refining the app’s design, ensuring consistency across screens, and improving user experience. 

## 📚 References

Expo Dev. (2024) *Expo Documentation: Build universal native apps with JavaScript and React.* Available at: https://docs.expo.dev/ (Accessed: 30 September 2025).

Meta Platforms Inc. (2024) *React Native Documentation: Learn once, write anywhere.* Available at: https://reactnative.dev/docs/getting-started (Accessed: 30 October 2025).

NPM. (2023) *@react-native-picker/picker Package.* Available at: https://www.npmjs.com/package/@react-native-picker/picker (Accessed: 6 October 2025).

Expo Router. (2024) *Expo Router: File-based routing for React Native apps.* Available at: https://expo.github.io/router/docs (Accessed: 30 October 2025).

Meta Platforms Inc. (2023) *React Documentation – Components and State Management.* Available at: https://react.dev/ (Accessed: 6 October 2025).

CHANGELOG – Final Submission (Part 3)
## 1. Code Structure & Organisation

Refactored into multiple modular files:

app/index.tsx → Home Screen

app/add-item.tsx → Add Item Screen

app/filter.tsx → Filter Screen

app/_layout.tsx → App Navigation

src/context/MenuContext.tsx → Global state management

## 2. Data Persistence

Added AsyncStorage to save and load menu data locally.

Ensures all menu items remain available even after closing the app.

## 3. Average Price Display

Added automatic calculation of average prices for:

Starters

Mains

Desserts

Displayed below the total menu count on the Home Screen.

## 4. Add Item Screen Enhancements

Moved “Add Menu Item” to a dedicated screen.

Added validation alerts for missing fields (dish name or price).

Applied consistent orange button theme (#D7903F) with rounded radius (35).

Clean and user-friendly layout with bordered styling.

## 5. Remove Item Functionality

Added confirmation alert before deleting menu items.

Updated logic ensures removal from both the array and persistent storage.

## 6. Filter Screen Improvements

Added Picker dropdown for filtering by course (Starters, Mains, Desserts).

Added two side-by-side food images for visual appeal.

Added Reset Filter and Back to Home buttons.

Full-screen border styling consistent with the app theme.

## 7. Home Screen Enhancements

Added a header image (Spaghetti.jpg).

Displayed total items and average course prices.

Improved spacing and alignment for better readability.

Full orange border and matching theme colors applied.

## 8. Consistent Styling Across All Screens

Unified button colors and rounded corners across the app.

Applied an orange border (#D7903F) and white background on all pages.

Enhanced text styles, spacing, and layout balance.

## 9. Navigation

Implemented Expo Router Stack Navigation.

Titles aligned for all pages: Home, Add Item, and Filter Menu.

Added intuitive screen flow between pages.

## 10. Refactoring and Code Quality

Cleaned up redundant imports and components.

Improved code readability with proper TypeScript typings.

Simplified UI rendering logic for better maintainability.

## 11. Visual Enhancements

Added contextual images:

Home: Spaghetti dish

Filter: Salad and soup images

Rounded image corners and uniform layout applied.

## 12. Deliverables

Fully working React Native Expo project.

GitHub repository containing all code files.

YouTube video demo showcasing:

Adding and removing menu items

Average price calculation

Filtering functionality

Persistent data after reload

## Reference

React Native Docs. (2024) React Native Components and APIs. Available at: https://reactnative.dev/docs/components-and-apis
 (Accessed: 28 October 2025).



