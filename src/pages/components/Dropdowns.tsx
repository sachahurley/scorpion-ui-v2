/**
 * DROPDOWNS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for dropdown button components
 * Shows basic usage, icons, button variants, alignment, and tokens
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Basic Dropdown section
 * 3. With Icons section
 * 4. Button Variants section
 * 5. Alignment section
 * 6. Destructive Actions section
 * 7. Detailed token breakdown
 */

import { Dropdown } from "@/components/ui/Dropdown";
import { Button } from "@/components/ui/Button";
import { 
  Edit, 
  Download, 
  Share2, 
  Copy, 
  Archive,
  Trash2,
  Settings,
  User,
  LogOut,
  FileText,
  Eye,
  Star,
  MoreVertical
} from "lucide-react";

export default function Dropdowns() {
  // Sample handlers for demonstration
  const handleEdit = () => console.log("Edit clicked");
  const handleDownload = () => console.log("Download clicked");
  const handleShare = () => console.log("Share clicked");
  const handleCopy = () => console.log("Copy clicked");
  const handleArchive = () => console.log("Archive clicked");
  const handleDelete = () => console.log("Delete clicked");

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from Buttons.tsx and Inputs.tsx
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Dropdown Buttons</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Action menu dropdowns that open a list of options. Includes keyboard navigation (arrow keys, enter, escape) and click-outside-to-close functionality.
        </p>
      </div>

      {/* 
        BASIC DROPDOWN SECTION
        Simple dropdown with text-only items
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Basic Dropdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Simple action menu with text-only items. Click the button or use keyboard navigation.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Dropdown
              label="Actions"
              items={[
                { label: "View Details", onClick: () => console.log("View") },
                { label: "Edit Item", onClick: handleEdit },
                { label: "Share", onClick: handleShare },
                { label: "Download", onClick: handleDownload },
              ]}
            />

            <Dropdown
              label="Options"
              items={[
                { label: "Settings", onClick: () => console.log("Settings") },
                { label: "Preferences", onClick: () => console.log("Preferences") },
                { label: "Help", onClick: () => console.log("Help") },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 
        WITH ICONS SECTION
        Menu items with left-aligned icons
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">With Icons</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Menu items with icons for better visual recognition of actions
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* Common Actions */}
            <Dropdown
              label="File Actions"
              items={[
                { label: "Edit", onClick: handleEdit, icon: <Edit className="w-5 h-5" /> },
                { label: "Download", onClick: handleDownload, icon: <Download className="w-5 h-5" /> },
                { label: "Share", onClick: handleShare, icon: <Share2 className="w-5 h-5" /> },
                { label: "Copy Link", onClick: handleCopy, icon: <Copy className="w-5 h-5" /> },
              ]}
            />

            {/* User Menu */}
            <Dropdown
              label="User Menu"
              items={[
                { label: "Profile", onClick: () => console.log("Profile"), icon: <User className="w-5 h-5" /> },
                { label: "Settings", onClick: () => console.log("Settings"), icon: <Settings className="w-5 h-5" /> },
                { label: "Sign Out", onClick: () => console.log("Sign Out"), icon: <LogOut className="w-5 h-5" /> },
              ]}
            />

            {/* Content Actions */}
            <Dropdown
              label="More"
              items={[
                { label: "View", onClick: () => console.log("View"), icon: <Eye className="w-5 h-5" /> },
                { label: "Star", onClick: () => console.log("Star"), icon: <Star className="w-5 h-5" /> },
                { label: "Export", onClick: () => console.log("Export"), icon: <FileText className="w-5 h-5" /> },
                { label: "Archive", onClick: handleArchive, icon: <Archive className="w-5 h-5" /> },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 
        BUTTON VARIANTS SECTION
        Using custom trigger buttons with different variants
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Custom Trigger Buttons</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Dropdowns with custom trigger buttons using different variants
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* Primary Button Trigger */}
            <Dropdown
              trigger={<Button variant="primary">Primary Dropdown</Button>}
              items={[
                { label: "Option 1", onClick: () => console.log("Option 1") },
                { label: "Option 2", onClick: () => console.log("Option 2") },
                { label: "Option 3", onClick: () => console.log("Option 3") },
              ]}
            />

            {/* Ghost Button Trigger */}
            <Dropdown
              trigger={<Button variant="ghost">Ghost Dropdown</Button>}
              items={[
                { label: "Action 1", onClick: () => console.log("Action 1") },
                { label: "Action 2", onClick: () => console.log("Action 2") },
              ]}
            />

            {/* Outline Button Trigger */}
            <Dropdown
              trigger={<Button variant="outline">Outline Dropdown</Button>}
              items={[
                { label: "View", onClick: () => console.log("View"), icon: <Eye className="w-5 h-5" /> },
                { label: "Edit", onClick: () => console.log("Edit"), icon: <Edit className="w-5 h-5" /> },
              ]}
            />

            {/* Icon Button Trigger */}
            <Dropdown
              trigger={
                <Button variant="icon" size="icon" aria-label="More options">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              }
              items={[
                { label: "Edit", onClick: handleEdit, icon: <Edit className="w-5 h-5" /> },
                { label: "Share", onClick: handleShare, icon: <Share2 className="w-5 h-5" /> },
                { label: "Download", onClick: handleDownload, icon: <Download className="w-5 h-5" /> },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 
        ALIGNMENT SECTION
        Left vs Right aligned menus
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Menu Alignment</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Control whether the menu appears aligned to the left or right of the trigger button
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 items-start">
            {/* Left Aligned (Default) */}
            <div className="flex flex-col gap-2">
              <Dropdown
                label="Left Aligned"
                align="left"
                items={[
                  { label: "Option 1", onClick: () => console.log("Option 1") },
                  { label: "Option 2", onClick: () => console.log("Option 2") },
                  { label: "Option 3", onClick: () => console.log("Option 3") },
                ]}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">align="left" (default)</p>
            </div>

            {/* Right Aligned */}
            <div className="flex flex-col gap-2">
              <Dropdown
                label="Right Aligned"
                align="right"
                items={[
                  { label: "Option 1", onClick: () => console.log("Option 1") },
                  { label: "Option 2", onClick: () => console.log("Option 2") },
                  { label: "Option 3", onClick: () => console.log("Option 3") },
                ]}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">align="right"</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        DESTRUCTIVE ACTIONS SECTION
        Menu items with destructive/danger styling
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Destructive Actions</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Dangerous actions styled in red to warn users. Typically placed at the bottom of the menu.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* With Destructive Action */}
            <Dropdown
              label="File Options"
              items={[
                { label: "Edit", onClick: handleEdit, icon: <Edit className="w-5 h-5" /> },
                { label: "Download", onClick: handleDownload, icon: <Download className="w-5 h-5" /> },
                { label: "Archive", onClick: handleArchive, icon: <Archive className="w-5 h-5" /> },
                { label: "Delete", onClick: handleDelete, icon: <Trash2 className="w-5 h-5" />, variant: "destructive" },
              ]}
            />

            {/* Multiple Actions with Delete */}
            <Dropdown
              label="Manage Item"
              items={[
                { label: "View Details", onClick: () => console.log("View"), icon: <Eye className="w-5 h-5" /> },
                { label: "Edit Info", onClick: handleEdit, icon: <Edit className="w-5 h-5" /> },
                { label: "Share", onClick: handleShare, icon: <Share2 className="w-5 h-5" /> },
                { label: "Remove", onClick: handleDelete, icon: <Trash2 className="w-5 h-5" />, variant: "destructive" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 
        DISABLED STATE SECTION
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Disabled Items</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Menu items can be disabled when actions are not available
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Dropdown
              label="Mixed States"
              items={[
                { label: "Available Action", onClick: () => console.log("Available"), icon: <Edit className="w-5 h-5" /> },
                { label: "Disabled Action", onClick: () => console.log("Disabled"), icon: <Share2 className="w-5 h-5" />, disabled: true },
                { label: "Another Action", onClick: () => console.log("Another"), icon: <Download className="w-5 h-5" /> },
                { label: "Also Disabled", onClick: () => console.log("Disabled 2"), icon: <Archive className="w-5 h-5" />, disabled: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 
        =================================================================
        DETAILED TOKEN BREAKDOWN
        Complete documentation of all tokens used in dropdowns
        =================================================================
      */}

      {/* DROPDOWN TOKEN BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          {/* Card Title & Subtitle */}
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Dropdown Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Complete documentation of all design tokens used in dropdown components
            </p>
          </div>
          
          {/* Token Documentation Cards */}
          <div className="space-y-6">
            {/* Trigger Button */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Trigger Button</h4>
              <div className="p-4 bg-sepia-50 dark:bg-sepia-950 rounded-2xl">
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  The trigger button uses the same tokens as the Button component. See the{" "}
                  <a href="/components/buttons" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700 dark:hover:text-primary-300">
                    Buttons documentation
                  </a>{" "}
                  for complete token details.
                </p>
              </div>
            </div>

            {/* Menu Container Colors */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Menu Container</h4>
              
              {/* Background */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-white border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Light: color.white</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-975 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Dark: color.sepia.975</span>
                  </div>
                </div>
              </div>

              {/* Border */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Border</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Light: color.sepia.300</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Dark: color.sepia.700</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Width: 1px</span>
                  </div>
                </div>
              </div>

              {/* Border Radius */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Border Radius</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">radius.container (24px)</span>
                  </div>
                </div>
              </div>

              {/* Shadow */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Elevation</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">shadow-lg (Tailwind default)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Menu Items</h4>
              
              {/* Default Item Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Default Item Text</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-900 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Light: color.sepia.900</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Dark: color.sepia.50</span>
                  </div>
                </div>
              </div>

              {/* Hover State */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Hover Background</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-100 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Light: color.sepia.100</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-900 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Dark: color.sepia.900</span>
                  </div>
                </div>
              </div>

              {/* Destructive Items */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Destructive Item</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Text (Light): color.error.600</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Text (Dark): color.error.500</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover (Light): color.error.50</span>
                  </div>
                </div>
              </div>

              {/* Item Padding */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Item Spacing</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 16px</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding Y: 12px</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Icon Gap: 12px</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Typography</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Font Family: <span className="font-mono">Fragment Mono</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Font Size: <span className="text-sm">14px</span></span>
                </div>
              </div>
            </div>

            {/* Z-Index */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Positioning</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Z-Index: zIndex.dropdown (1000)</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Position: absolute</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Min Width: 200px</span>
                </div>
              </div>
            </div>

            {/* Animation */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Animation</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Duration: 200ms</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Effect: fade-in + slide-in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        KEYBOARD NAVIGATION SECTION
        Documentation for accessibility features
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Keyboard Navigation</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Full keyboard support for accessibility
            </p>
          </div>

          <div className="p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-2xl">
            <div className="space-y-4">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                ⌨️ Keyboard Shortcuts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono text-sepia-600 dark:text-sepia-400">
                <div>
                  <span className="font-bold text-sepia-900 dark:text-sepia-50">Enter / Space</span>
                  <p>Open dropdown or select focused item</p>
                </div>
                <div>
                  <span className="font-bold text-sepia-900 dark:text-sepia-50">Escape</span>
                  <p>Close dropdown</p>
                </div>
                <div>
                  <span className="font-bold text-sepia-900 dark:text-sepia-50">Arrow Down</span>
                  <p>Move focus to next item</p>
                </div>
                <div>
                  <span className="font-bold text-sepia-900 dark:text-sepia-50">Arrow Up</span>
                  <p>Move focus to previous item</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

