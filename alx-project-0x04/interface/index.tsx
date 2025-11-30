// Home Page Routing Interface
export interface PageRouteProps {
  pageRoute: string;
}

// Button Component Interface
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor?: "blue" | "green" | "orange";
}

// Layout Props Interface
export interface LayoutProps {
  children: React.ReactNode;
}
