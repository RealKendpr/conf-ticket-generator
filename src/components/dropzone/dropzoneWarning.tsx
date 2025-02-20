export default function DropzoneWarning({ tooLarge }: { tooLarge: boolean }) {
  return (
    <div className="flex gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        className={tooLarge ? "text-orange-700" : "text-neutral-0"}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
        />
        <path fill="currentColor" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.004 10.462V7.596M8 5.569v-.042"
        />
      </svg>
      {tooLarge ? (
        <p
          className="text-xs text-orange-700"
          role="alert"
          aria-live="assertive"
        >
          File too large. Please upload a photo under 500KB.
        </p>
      ) : (
        <p className="text-neutral-0 text-xs">
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
      )}
    </div>
  );
}
