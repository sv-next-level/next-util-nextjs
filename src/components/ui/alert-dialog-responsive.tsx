"use client";

import * as React from "react";

import { useMediaQuery } from "@/nextjs/hooks";
import { cn } from "@/nextjs/lib/utils";

import {
  AlertDialog,
  // AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/nextjs/components/ui/alert-dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/nextjs/components/ui/drawer";

interface BaseProps {
  children: React.ReactNode;
}

interface RootAlertDialogResponsiveProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface AlertDialogResponsiveProps extends BaseProps {
  className?: string;
  asChild?: true;
}

const desktop = "(min-width: 768px)";

const AlertDialogResponsive = ({
  children,
  ...props
}: RootAlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsive = isDesktop ? AlertDialog : Drawer;

  return <AlertDialogResponsive {...props}>{children}</AlertDialogResponsive>;
};

const AlertDialogResponsiveTrigger = ({
  className,
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsiveTrigger = isDesktop
    ? AlertDialogTrigger
    : DrawerTrigger;

  return (
    <AlertDialogResponsiveTrigger className={className} {...props}>
      {children}
    </AlertDialogResponsiveTrigger>
  );
};

const AlertDialogResponsiveClose = ({
  className,
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsiveClose = isDesktop
    ? AlertDialogCancel
    : DrawerClose;

  return (
    <AlertDialogResponsiveClose className={className} {...props}>
      {children}
    </AlertDialogResponsiveClose>
  );
};

const AlertDialogResponsiveContent = ({
  className,
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsiveContent = isDesktop
    ? AlertDialogContent
    : DrawerContent;

  return (
    <AlertDialogResponsiveContent className={className} {...props}>
      {children}
    </AlertDialogResponsiveContent>
  );
};

const AlertDialogResponsiveDescription = ({
  className,
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsiveDescription = isDesktop
    ? AlertDialogDescription
    : DrawerDescription;

  return (
    <AlertDialogResponsiveDescription className={className} {...props}>
      {children}
    </AlertDialogResponsiveDescription>
  );
};

const AlertDialogResponsiveHeader = ({
  className,
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsiveHeader = isDesktop
    ? AlertDialogHeader
    : DrawerHeader;

  return (
    <AlertDialogResponsiveHeader className={className} {...props}>
      {children}
    </AlertDialogResponsiveHeader>
  );
};

const AlertDialogResponsiveTitle = ({
  className,
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsiveTitle = isDesktop ? AlertDialogTitle : DrawerTitle;

  return (
    <AlertDialogResponsiveTitle className={className} {...props}>
      {children}
    </AlertDialogResponsiveTitle>
  );
};

const AlertDialogResponsiveBody = ({
  className,
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...props}>
      {children}
    </div>
  );
};

const AlertDialogResponsiveFooter = ({
  className,
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsiveFooter = isDesktop
    ? AlertDialogFooter
    : DrawerFooter;

  return (
    <AlertDialogResponsiveFooter className={className} {...props}>
      {children}
    </AlertDialogResponsiveFooter>
  );
};

const AlertDialogResponsivePortal = ({
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsivePortal = isDesktop
    ? AlertDialogPortal
    : DrawerPortal;

  return (
    <AlertDialogResponsivePortal {...props}>
      {children}
    </AlertDialogResponsivePortal>
  );
};

const AlertDialogResponsiveOverlay = ({
  className,
  children,
  ...props
}: AlertDialogResponsiveProps) => {
  const isDesktop = useMediaQuery(desktop);
  const AlertDialogResponsiveOverlay = isDesktop
    ? AlertDialogOverlay
    : DrawerOverlay;

  return (
    <AlertDialogResponsiveOverlay className={className} {...props}>
      {children}
    </AlertDialogResponsiveOverlay>
  );
};

export {
  AlertDialogResponsive,
  AlertDialogResponsiveTrigger,
  AlertDialogResponsiveClose,
  AlertDialogResponsiveContent,
  AlertDialogResponsiveDescription,
  AlertDialogResponsiveHeader,
  AlertDialogResponsiveTitle,
  AlertDialogResponsiveBody,
  AlertDialogResponsiveFooter,
  AlertDialogResponsiveOverlay,
  AlertDialogResponsivePortal,
};
