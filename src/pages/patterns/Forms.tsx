/**
 * FORMS PATTERN DOCUMENTATION PAGE
 *
 * How the field components compose into a full form.
 *
 * Structure:
 * 1. Page header (title + description)
 * 2. Account settings specimen: every field component working together
 * 3. Layout guidance (labels, widths, button alignment)
 * 4. Implementation example (one label + field pairing)
 */

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Radio } from "@/components/ui/Radio";
import { Checkbox } from "@/components/ui/Checkbox";
import { Switch } from "@/components/ui/Switch";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/docs/Panel";

export default function Forms() {
  // Specimen state: the error field stays in error until it has a value,
  // the switch is a controlled toggle.
  const [displayName, setDisplayName] = useState("");
  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Forms</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Composing inputs, selects, radios, checkboxes, switches, and textareas into complete forms. Every control shares the plate field recipe: idle hairline, hover, then the accent focus ring.
        </p>
      </div>

      {/*
        ACCOUNT SETTINGS SPECIMEN
        A complete form built from the real field components
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Account Settings Specimen</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Text input, error state, select, radio group, checkbox group, switch, textarea, and the button row, all composed with real components.
            </p>
          </div>

          <Panel>
            <form className="max-w-md space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Display name: demonstrates the error state until filled */}
              <div>
                <Input
                  label="Display name"
                  placeholder="How you appear to others"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  error={displayName === ""}
                  size="medium"
                />
                {displayName === "" && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500">
                    Display name is required
                  </p>
                )}
              </div>

              {/* Email */}
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                size="medium"
              />

              {/* Timezone select */}
              <Select label="Timezone" size="medium" defaultValue="pt">
                <option value="pt">Pacific Time (UTC-8)</option>
                <option value="mt">Mountain Time (UTC-7)</option>
                <option value="ct">Central Time (UTC-6)</option>
                <option value="et">Eastern Time (UTC-5)</option>
              </Select>

              {/* Theme radio group */}
              <fieldset>
                <legend className="block font-mono text-sm text-secondary-800 dark:text-secondary-200 mb-2">
                  Theme
                </legend>
                <div className="space-y-2">
                  <Radio name="forms-theme" value="system" label="Match system" defaultChecked />
                  <Radio name="forms-theme" value="light" label="Light" />
                  <Radio name="forms-theme" value="dark" label="Dark" />
                </div>
              </fieldset>

              {/* Notifications checkbox group */}
              <fieldset>
                <legend className="block font-mono text-sm text-secondary-800 dark:text-secondary-200 mb-2">
                  Email notifications
                </legend>
                <div className="space-y-2">
                  <Checkbox label="Product updates" defaultChecked />
                  <Checkbox label="Weekly digest" defaultChecked />
                  <Checkbox label="Marketing and promotions" />
                </div>
              </fieldset>

              {/* Public profile switch */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-sm text-[var(--text-primary)]">Public profile</p>
                  <p className="font-mono text-xs text-secondary-700 dark:text-secondary-600">
                    Anyone can view your profile page
                  </p>
                </div>
                <Switch
                  checked={publicProfile}
                  onCheckedChange={setPublicProfile}
                  size="medium"
                  label="Public profile"
                  hideLabel
                />
              </div>

              {/* Bio textarea */}
              <Textarea
                label="Bio"
                placeholder="A short introduction..."
                rows={4}
                size="medium"
              />

              {/* Button row: primary action right, quiet action beside it */}
              <div className="flex justify-end gap-3 pt-2">
                <Button variant="ghost" size="medium" type="button">
                  Cancel
                </Button>
                <Button variant="primary" size="medium" type="submit">
                  Save changes
                </Button>
              </div>
            </form>
          </Panel>
        </Panel>
      </section>

      {/*
        LAYOUT GUIDANCE SECTION
        Brief rules for composing forms
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Layout Guidance</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Conventions that keep forms scannable and predictable
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Label placement</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Labels sit above their field, left-aligned, in the small mono size. Radio and checkbox groups get a legend in the same style, with the options stacked below it. Never rely on placeholder text as the only label.
              </p>
            </Panel>

            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Field widths</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Fields fill their column, and the column is capped (max-w-md here) so single-column forms stay readable. Keep one column unless fields are tightly related, such as city and postal code.
              </p>
            </Panel>

            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Button alignment</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                The primary action sits at the end of the row (right-aligned), with the quiet ghost action beside it. One primary button per form; error text renders directly under the field it belongs to.
              </p>
            </Panel>
          </div>
        </Panel>
      </section>

      {/*
        IMPLEMENTATION EXAMPLE SECTION
        One label + field pairing printed as code
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Implementation Example</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              A labelled field with an error message. The label prop wires htmlFor and id automatically.
            </p>
          </div>

          <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
            <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`<div>
  <Input
    label="Display name"
    placeholder="How you appear to others"
    value={displayName}
    onChange={(e) => setDisplayName(e.target.value)}
    error={displayName === ""}
    size="medium"
  />
  {displayName === "" && (
    <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500">
      Display name is required
    </p>
  )}
</div>`}
            </pre>
          </Panel>
        </Panel>
      </section>
    </div>
  );
}
