/**
 * The WipCallout function renders a custom callout component with optional context text for
 * displaying maintenance messages.
 * @param {Props}  - The code snippet you provided is a React component named `WipCallout` that
 * renders a special callout message. The component takes an optional prop `context` of type string,
 * which can be used to customize the message displayed in the callout.
 * @returns The WipCallout component is being returned, which is a React element representing a
 * custom callout with a message. The message displayed depends on the value of the `context` prop
 * passed to the component. If `context` is provided, it will display the provided context message. If
 * `context` is not provided, it will display a default maintenance message.
 */
import type { ReactElement } from 'react';
interface Props {
  context?: string;
}
export function WipCallout({ context }: Props): ReactElement {
  return (
    <div className="custom-callouts nx-w-full nx-mt-6 nx-flex nx-justify-center nx-items-center nx-bg-white dark:nx-bg-black">
      <div className="nx-w-full  nx-px-4 nx-text-center nx-font-medium nx-text-sm nx-text-left">
        {context ? (
          context
        ) : (
          <div className="nx-text-left">
            Please do not rely on the content of this page as it is currently
            undergoing maintenance. Code samples and solutions may not function
            as expected. Please check back for an update or{' '}
            <a
              href="https://github.com/ethereum-optimism/docs/issues"
              className="callout-link"
            >
              signup to help us revise this page
            </a>
            . We welcome your contribution! ❤️
          </div>
        )}
      </div>
    </div>
  );
}

export function InfoCallout({ context }: Props): ReactElement {
  return (
    <div className="custom-callouts nx-w-full nx-mt-6 nx-flex nx-justify-center nx-items-center nx-bg-white dark:nx-bg-black">
      <div className="nx-w-full  nx-px-4 nx-text-center nx-font-medium nx-text-sm nx-text-left">
        {context ? (
          context
        ) : (
          <div className="nx-text-left">
            Interop is currently in <strong>active development</strong> and not yet ready for production use. 
            The information provided here may change frequently. 
            <p>
            We recommend checking back 
            regularly for the most up-to-date information.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function AltCallout({ context }: Props): ReactElement {
  return (
    <div className="custom-callouts nx-w-full nx-mt-6 nx-flex nx-justify-center nx-items-center nx-bg-white dark:nx-bg-black">
      <div className="nx-w-full  nx-px-4 nx-text-center nx-font-medium nx-text-sm nx-text-left">
        {context ? (
          context
        ) : (
          <div className="nx-text-left">
            The Alt-DA Mode feature is currently in <strong>Beta</strong>  within the MIT-licensed OP Stack. Beta features are built and reviewed by the Optimism Collective’s core contributors, and provide developers with early access to highly requested configurations.
These features may experience stability issues, and we encourage feedback from our early users.
          </div>
        )}
      </div>
    </div>
  );
}
