export function BrandMark() {
  return (
    <div className="brand">
      <svg className="brand-logo" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="9" y="9" width="70" height="70" rx="19" fill="var(--tile-fill)" stroke="var(--tile-stroke)" strokeWidth="3" />
        <path
          d="M28.692 37.154a2.43 2.43 0 0 1 2.962 1.42l2.437 5.257 8.89-1.84-4.634-7.678a2.267 2.267 0 0 1 1.717-3.42l1.705-.231a4.487 4.487 0 0 1 3.58 1.131l7.666 6.788 5.968-1.238a4.502 4.502 0 0 1 5.335 3.48 4.502 4.502 0 0 1-3.48 5.336L36.28 51.26a4.36 4.36 0 0 1-5.019-2.52l-4.163-8.992a2.432 2.432 0 0 1 1.594-3.328Z"
          fill="var(--tile-mark)"
        />
        <rect x="28" y="57.5" width="32" height="4.5" rx="2.25" fill="var(--tile-mark)" />
      </svg>

      <div className="brand-copy">
        <span className="brand-eyebrow">Cargo Ops Control</span>
        <span className="brand-name">SkyHub</span>
      </div>
    </div>
  );
}
