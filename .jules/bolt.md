## 2025-12-28 - [React.memo for List Items]
**Learning:** When rendering a list of items where only one item's state changes (e.g., selection), memoizing the list item component and using a stable callback prevents re-rendering the entire list.
**Action:** Use React.memo and useCallback for list items with selection state.
