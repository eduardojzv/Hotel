import { SVGProps } from "react"

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 500 300"
      fill="none"
      {...props}
    >
      <path
        fill='currentColor'
        d="M253.118 243.041c-8.228-.679-16.626-11.222-18.146-20.44-3.343-20.289 4.397-37.337 16.62-52.325 8.426-10.33 18.748-19.114 28.588-28.955l-5.748-13.911c-5.328 4.516-10.472 8.713-15.437 13.111-19.197 17.009-35.286 36.703-50.142 57.533-3.281 4.601-7.708 8.984-12.592 11.688-5.718 3.165-11.646-.501-12.09-7.179-.638-9.594-.17-19.262-.185-28.899-.001-.815-.09-1.63-.207-3.64-2.088 1.54-3.692 2.443-4.95 3.694-14.32 14.246-28.537 28.596-42.914 42.784-2.633 2.598-5.705 4.844-8.85 6.81-4.364 2.726-8.843-.2-8.953-6.3-.128-7.072.068-14.232 1.053-21.223 1.532-10.877 3.658-21.684 5.879-32.449 2.993-14.508 6.321-28.947 9.482-43.42.264-1.21.351-2.459.7-4.993-19.584 14.996-38.012 29.657-61.265 36.97 7.484 17.726 6.885 36.184 5.797 54.355-1.267 21.161-5.67 41.918-15.88 60.86-2.969 5.505-6.968 10.53-10.973 15.381-4.742 5.744-14.239 5.93-16.665-4.31-3.125-13.182-3.15-26.673-1.33-40.158.701-5.202.536-10.517 1.136-15.738 1.058-9.206 2.32-18.392 3.643-27.565 1.344-9.308 2.838-18.594 4.323-27.88.76-4.758 1.644-9.496 2.48-14.295-10.185-3.934-14.672-9.811-13.486-17.923.79-5.411 4.477-6.979 18.728-7.865C57.288 100.784 63.93 74.99 74.38 50.444c5.8-13.626 13.088-26.66 25.987-35.183 3.375-2.23 7.343-3.563 11.04-5.308l.866 1.077c-2.422 2.301-5.5 4.214-7.136 6.98-4.059 6.862-8.606 13.76-10.923 21.27-9.452 30.649-18.174 61.523-27.038 92.352-.612 2.128-.865 4.82-.107 6.798 2.387 6.23 3.357 6.552 9.354 4.434 15.712-5.549 29.276-14.816 42.155-25.07 8.329-6.633 15.844-14.302 24.309-20.739 2.55-1.94 7.474-2.513 10.545-1.466 2.514.858 2.818 4.826 1.744 8.506-4.814 16.48-9.435 33.034-13.43 49.729-3.114 13.015-5.223 26.272-7.73 39.431-.533 2.793-.854 5.625-1.272 8.439l1.197.619c1.242-1.162 2.504-2.303 3.723-3.488 14.448-14.05 29.478-27.394 45.872-39.198 2.042-1.47 2.851-5.26 3.376-8.13 3.499-19.156 10.78-36.74 22.583-52.154 3.761-4.913 9.081-9.085 14.501-12.167 7.555-4.294 13.975 2.405 12.835 10.434-3.044 21.457-12.526 39.907-28.088 55.108-1.386 1.354-2.99 2.512-4.596 3.609-5.048 3.448-5.422 8.944-6.326 14.205-1.591 9.257-3.142 18.52-4.712 27.798 4.733 1.543 6.107-1.093 7.938-3.407 11.107-14.04 21.552-28.715 33.748-41.748 10.357-11.07 22.85-20.128 34.184-30.315 1.246-1.12 1.876-4.02 1.434-5.746-3.228-12.605-1.618-24.113 8.265-33.092 9.402-8.545 25.227-7.525 31.802 7.171.775 1.731.008 5.74-1.31 6.5-3.023 1.743-3.8-1.309-4.747-3.718-2.028-5.158-7.38-8.94-11.422-7.889-7.057 1.837-11.58 5.59-12.107 12.943-.955 13.353 5.21 24.39 10.745 36.475 2.36-1.172 4.557-2.378 6.843-3.38 12.309-5.401 24.518-11.066 37.043-15.913 3.403-1.317 4.79-3.139 5.405-6.031 3.422-16.09 6.727-32.204 10.022-48.32.223-1.094.029-2.273.029-4.015-6.125 1.203-11.926 2.245-17.682 3.493-13.546 2.937-27.146 4.309-40.707.537-3.29-.915-6.54-2.879-9.155-5.122-4.7-4.032-4.35-6.018-.274-10.53 2.368-2.621 4.681-2.803 7.3-1.045 10.664 7.158 22.29 8.07 34.583 5.904 9.105-1.605 18.304-2.675 27.431-4.165.947-.155 2.138-1.402 2.46-2.388 3.137-9.598 6.044-19.27 9.166-28.871 1.29-3.97 4.893-4.919 8.538-2.512 5.705 3.767 6.912 8.075 4.387 14.06-2.235 5.296-4.097 10.749-6.501 17.134 24.185-4.479 47.521-5.79 69.188 8.201-2.553 0-5.249.542-7.636-.086-18.754-4.936-37.446-4.354-56.165.08-2.817.667-5.675 1.162-9.671 1.971l-24.87 115.669 1.57.815c1.918-2.415 3.92-4.767 5.737-7.255 9.726-13.32 18.868-27.112 29.255-39.892 9.96-12.255 20.678-24.008 32.036-34.975 8.726-8.425 18.855-15.427 28.576-22.776 4.25-3.212 10.429-2.148 15.804 2.197.823-1.953 2.018-3.718 2.263-5.606.435-3.345 2.281-4.225 5.121-3.628 2.785.585 5.027 1.952 4.248 5.386a860.03 860.03 0 0 1-4.026 16.854c-5.305 21.37-11.063 42.64-15.78 64.14-2.361 10.763-3.867 21.933-3.936 32.93-.102 16.447 3.092 32.471 11.79 46.905.333.55.72 1.092.92 1.692.146.444.028.976.028 3.163-3.23-2.293-6.164-3.597-7.994-5.813-7.418-8.978-10.642-19.851-11.828-31.113-1.072-10.17-.943-20.477-1.088-30.727-.048-3.376.701-6.764 1.215-11.287-1.643 1.276-2.637 1.745-3.192 2.527-5.17 7.285-11.639 12.592-20.699 14.257-4.872.896-10.02-4.36-10.437-10.314-1.052-15.005 3.459-28.873 8.563-42.58 3-8.054 6.63-15.874 10.1-24.091-.901.19-2.11.07-2.625.612-6.72 7.055-14.16 13.61-19.836 21.44-18.855 26.01-37.071 52.483-55.518 78.789-2.053 2.928-4.776 3.838-8.174 2.964-3.56-.916-3.77-3.613-3.463-6.564 1.314-12.664 2.5-25.343 4-37.985 1.102-9.301 2.616-18.553 4.084-28.782-15.828 4.543-29.596 11.827-42.882 19.929 5.943 13.346 11.586 26.501 13.004 41.29 1.235 12.884 1.226 25.276-4.183 37.294-6.259 13.908-17.871 20.486-32.083 22.866-5.977 1-12.253.214-18.824.204M245 207.635c0 2.996-.312 6.032.058 8.982 1.166 9.308 3.088 16.424 12.978 18.734 7.213 1.685 14.556-.877 19.642-5.811 14.658-14.22 19.876-31.89 15.446-51.859-2-9.016-5.397-17.722-8.428-27.423-1.955.977-3.688 1.42-4.845 2.489-6.802 6.28-13.624 12.553-20.147 19.118-9.525 9.585-14.118 21.388-14.704 35.77M61.997 160.379c-.666 3.99-1.446 7.966-1.974 11.974-1.147 8.71-2.129 17.441-3.246 26.155-1.22 9.507-2.545 19-3.768 28.505-1.017 7.907-2.332 15.802-2.819 23.745-.486 7.93-.107 15.914-.107 24.878 2.315-2.084 4.617-3.376 5.752-5.342 2.382-4.124 4.511-8.473 6.11-12.956 8.713-24.436 12.934-49.604 12.109-75.607-.28-8.837-1.773-17.262-4.815-25.616-1.25-3.436-2.739-3.521-4.639-1.98-1.396 1.133-1.77 3.526-2.603 6.244m360.963-45.965c-3.317 11.027-6.883 21.99-9.816 33.118-1.03 3.91-.506 8.23-.691 12.363l1.765.71c2.517-1.624 5.35-2.913 7.492-4.934 7.064-6.66 11.28-15.167 15.072-23.976 6.006-13.952 9.716-28.555 12.015-43.462.713-4.62 1.882-10.168-3.135-15.022-2.087 2.28-4.532 4.06-5.774 6.461-5.799 11.218-11.265 22.608-16.928 34.742m-207.535-3.356-11.786 33.304 1.074.979c1.327-.846 2.895-1.465 3.943-2.576 7.286-7.72 12.802-16.632 16.244-26.631 1.655-4.809 2.278-10.008 2.973-15.085.169-1.229-1.226-2.672-1.901-4.017-1.214.716-2.877 1.142-3.559 2.2-2.338 3.629-4.331 7.478-6.988 11.826M49.972 137.147v-5.836c-3.059 1.952-6.228 2.845-6.718 4.521-1.041 3.555 1.658 5.478 5.241 6.33.4-1.543.747-2.888 1.477-5.015z"
      />
      <path fill="currentColor"
        d="M162 77.042c-.62 8.084-4.607 13.168-10.067 12.858-1.247-.07-3.442-1.363-3.465-2.144-.13-4.506-.008-9.06.552-13.533.535-4.277 3.913-4.846 7.375-4.158 3.403.677 6.165 2.296 5.605 6.977z"
      />
    </svg>
  )
}
export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    {...props}
  >
    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
  </svg>
}

export function AllInclusiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99C3.53 15.38 2 13.87 2 12c0-1.87 1.53-3.38 3.4-3.38.91 0 1.76.35 2.44 1.03l1.13 1 1.53-1.34L9.22 8.2A5.37 5.37 0 005.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99 1.87 0 3.4 1.51 3.4 3.38 0 1.87-1.53 3.38-3.4 3.38-.9 0-1.76-.35-2.44-1.03L15 13.34l-1.5 1.34 1.28 1.12a5.386 5.386 0 003.82 1.57c2.98 0 5.4-2.41 5.4-5.37 0-3-2.42-5.38-5.4-5.38z" />
    </svg>
  );
}
export function LodgingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16M256 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16"
      />
    </svg>
  );
}
export function GalleryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

export function OfferIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20.749 12l1.104-1.908a1 1 0 00-.365-1.366l-1.91-1.104v-2.2a1 1 0 00-1-1h-2.199l-1.103-1.909a1.008 1.008 0 00-.607-.466.993.993 0 00-.759.1L12 3.251l-1.91-1.105a1 1 0 00-1.366.366L7.62 4.422H5.421a1 1 0 00-1 1v2.199l-1.91 1.104a.998.998 0 00-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 00.364 1.367l1.91 1.104v2.199a1 1 0 001 1h2.2l1.104 1.91a1.01 1.01 0 00.866.5c.174 0 .347-.046.501-.135l1.908-1.104 1.91 1.104a1.001 1.001 0 001.366-.365l1.103-1.91h2.199a1 1 0 001-1v-2.199l1.91-1.104a1 1 0 00.365-1.367L20.749 12zM9.499 6.99a1.5 1.5 0 11-.001 3.001 1.5 1.5 0 01.001-3.001zm.3 9.6l-1.6-1.199 6-8 1.6 1.199-6 8zm4.7.4a1.5 1.5 0 11.001-3.001 1.5 1.5 0 01-.001 3.001z" />
    </svg>
  );
}
export function ExcursionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path d="M256 0c134.4 0 224 35.2 224 80v48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H160v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-32c-17.7 0-32-14.3-32-32V256c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32V80c0-44.8 89.6-80 224-80zM96 160v96c0 17.7 14.3 32 32 32h112V128H128c-17.7 0-32 14.3-32 32zm176 128h112c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H272v160zM112 400c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM352 80c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16z" />
    </svg>
  );
}

export function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      {...props}
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" />
    </svg>
  );
}
export function FoodIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path d="M18 11v7a2 2 0 01-4 0v-5h-2V3a3 3 0 013-3h3v11zM4 10a2 2 0 01-2-2V1a1 1 0 012 0v4h1V1a1 1 0 012 0v4h1V1a1 1 0 012 0v7a2 2 0 01-2 2v8a2 2 0 01-4 0v-8z" />
    </svg>
  );
}
export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      {...props}
    >
      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
    </svg>
  );
}
export function PartyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.53 1.45l-1.08 1.08 1.6 1.6c.22.25.33.54.33.87s-.11.64-.33.86L11.5 9.47l1 1.08 3.63-3.61c.53-.59.79-1.24.79-1.94s-.26-1.36-.79-1.95l-1.6-1.6m-3.98 2.02L9.47 4.55l.61.56c.22.22.33.52.33.89s-.11.67-.33.89l-.61.56 1.08 1.08.56-.61c.53-.59.8-1.23.8-1.92 0-.72-.27-1.37-.8-1.97l-.56-.56M21 5.06c-.69 0-1.33.27-1.92.8l-5.63 5.64 1.08 1 5.58-5.56c.25-.25.55-.38.89-.38s.64.13.89.38l.61.61 1.03-1.08-.56-.61c-.59-.53-1.25-.8-1.97-.8M7 8L2 22l14-5-9-9m12 3.06c-.7 0-1.34.27-1.94.8l-1.59 1.59 1.08 1.08 1.59-1.59c.25-.25.53-.38.86-.38.33 0 .63.13.88.38l1.62 1.59 1.05-1.03-1.6-1.64c-.59-.53-1.25-.8-1.95-.8z" />
    </svg>
  );
}
export function SpanIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 576 512"
      fill="currentColor"
      {...props}
    >
      <path d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5 7 9.9 13.4 20.3 19.1 31 5.7-10.8 12.1-21.1 19.1-31 22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1 0 148-119.9 267.9-267.9 267.9h-40.2C119.9 480 0 360.1 0 212.1 0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6-38 21.6-71.4 50.8-97.9 85.6-26.5-34.8-59.9-63.9-97.9-85.6 23.2-92.8 68.6-147.7 84.4-164.6 3.5-3.7 8.4-5.6 13.5-5.6s10 1.9 13.5 5.6z" />
    </svg>
  );
}

export function FitnessIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 122.88 103.05"
      {...props}
    >
      <path
        d="M61.07 10.48C65.96 5.39 69.38.98 76.91.12c14.13-1.62 27.14 12.85 20 27.1-2.03 4.06-6.17 8.88-10.75 13.62-5.02 5.2-10.58 10.29-14.47 14.15L61.07 65.53l-8.77-8.44C41.74 46.92 24.53 34.12 23.97 18.27 23.57 7.17 32.33.05 42.41.18c9.01.12 12.79 4.6 18.66 10.3zM4.08 61.55h5.65c.15 0 .29.01.44.02v-4.05c0-.06.01-.12.01-.18.05-1.05.49-2 1.19-2.7.73-.74 1.75-1.19 2.88-1.19h5.65c.15 0 .29.01.44.02v-4.05c0-1.12.46-2.14 1.2-2.88a4.06 4.06 0 0 1 2.87-1.19h5.65c1.12 0 2.14.46 2.88 1.2.74.74 1.2 1.75 1.2 2.88v49.55c0 1.12-.46 2.14-1.2 2.88a4.05 4.05 0 0 1-2.88 1.2h-5.65c-.06 0-.12-.01-.18-.01-1.05-.05-2-.49-2.7-1.19a4.077 4.077 0 0 1-1.19-2.87v-3.43c-.14.02-.29.03-.44.03h-5.65c-.06 0-.12-.01-.18-.01a4.077 4.077 0 0 1-2.69-1.19c-.74-.74-1.2-1.75-1.19-2.87v-4.68c-.14.02-.29.03-.44.02H4.09c-1.12 0-2.14-.46-2.88-1.2-.73-.73-1.2-1.75-1.2-2.88L0 65.63c0-1.12.46-2.15 1.19-2.88.74-.74 1.76-1.19 2.89-1.2zm94.41-12.57h-5.7c-.1.02-.19.06-.26.13-.08.08-.13.19-.13.31v49.55c0 .12.05.23.13.31.08.08.19.13.31.13h5.7c.09-.01.19-.06.26-.13.08-.08.14-.19.14-.3 0-16.52-.01-33.03-.01-49.55 0-.12-.05-.23-.13-.31a.392.392 0 0 0-.31-.14zM81.32 70.21v8.78l-39.18-.01V70.2l39.18.01zm37.48-5.02h-5.65c-.13 0-.24.05-.31.13-.07.07-.11.15-.13.25v17.24a.457.457 0 0 0 .44.38h5.65c.13 0 .24-.05.31-.13.08-.08.13-.19.13-.31l-.01-17.12c0-.12-.05-.23-.13-.31s-.18-.13-.3-.13zm-5.64-3.64h5.64c1.13 0 2.14.46 2.88 1.2s1.2 1.75 1.2 2.88v17.13c0 1.11-.46 2.14-1.2 2.86-.74.74-1.76 1.2-2.87 1.2h-5.65c-.15 0-.29-.01-.44-.02v4.68c0 1.12-.46 2.14-1.2 2.88a4.11 4.11 0 0 1-2.88 1.2h-5.65c-.15 0-.29-.01-.44-.03v3.43c0 1.12-.46 2.14-1.19 2.87-.7.7-1.65 1.14-2.7 1.19-.06 0-.12.01-.18.01h-5.65c-1.12 0-2.14-.46-2.88-1.2a4.11 4.11 0 0 1-1.2-2.88l-.02-49.53c0-1.12.46-2.15 1.19-2.88.7-.7 1.65-1.14 2.7-1.19.06-.01.12-.01.18-.01h5.65a4.077 4.077 0 0 1 4.07 4.07v4.05c.14-.02.29-.03.44-.02h5.65c1.12 0 2.14.46 2.88 1.19.74.74 1.19 1.76 1.19 2.88v4.05c.19 0 .33-.01.48-.01zm-4.52-4.47H103c-.12 0-.22.05-.31.13-.08.08-.13.18-.13.3v33.97c0 .12.05.23.13.31.08.08.19.14.3.14h5.65c.12 0 .22-.05.31-.13.08-.08.13-.19.13-.31 0-11.32 0-22.65.01-33.97 0-.12-.05-.23-.13-.31a.482.482 0 0 0-.32-.13zM23.95 98.95c0 .12.06.23.14.3.07.07.16.12.26.13h5.7c.12 0 .23-.05.31-.13.08-.08.13-.19.13-.31l-.01-49.53c0-.12-.05-.23-.13-.31a.439.439 0 0 0-.31-.13h-5.65c-.12 0-.23.06-.3.14-.08.08-.13.19-.13.31-.01 16.51-.01 33.02-.01 49.53zm-3.64-7.41V57.46a.466.466 0 0 0-.13-.25.439.439 0 0 0-.31-.13h-5.65c-.12 0-.23.06-.31.14-.07.07-.11.16-.13.26v34.01c0 .13.05.23.13.31.07.07.16.12.26.13h5.7c.12 0 .23-.06.3-.14.08-.07.13-.16.14-.25zM9.72 65.19H4.07c-.12 0-.23.05-.31.13-.08.08-.13.19-.13.31v17.13c0 .12.05.23.13.31.08.08.19.13.31.13h5.65c.12 0 .23-.05.31-.13s.13-.19.13-.31l-.01-17.13v-.01c0-.12-.05-.22-.13-.3a.395.395 0 0 0-.3-.13zm38.22-33.86a3.413 3.413 0 0 1-1.05-2.4c-.02-.87.3-1.76.95-2.43a3.408 3.408 0 0 1 4.82-.1l5.2 4.98L70.23 19.9l.42.32-.42-.32c.03-.04.07-.08.12-.11.7-.6 1.57-.87 2.42-.83l.04.01c.86.05 1.7.44 2.32 1.13.63.7.92 1.59.87 2.46l-.01.04c-.05.84-.43 1.67-1.09 2.28l-14.71 13.7c-.02.03-.05.06-.08.09-.66.58-1.49.86-2.31.85-.83-.01-1.66-.33-2.31-.95l-7.55-7.24z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
      />
    </svg>
  )
}
export function GroupUsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      {...props}
    >
      <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zm10.7-96c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM128 485.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
    </svg>
  );
}
export function ServiceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 5a2 2 0 012 2c0 .24-.04.47-.12.69C17.95 8.5 21 11.91 21 16H3c0-4.09 3.05-7.5 7.12-8.31-.08-.22-.12-.45-.12-.69a2 2 0 012-2m10 14H2v-2h20v2M12 9.5c-3.11 0-5.75 1.89-6.66 4.5h13.32c-.91-2.61-3.55-4.5-6.66-4.5z" />
    </svg>
  );
}
export function ClubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M11.5 12.5a3.493 3.493 0 01-2.684-1.254 19.92 19.92 0 001.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 001.582-2.907 3.5 3.5 0 11-2.538-5.743 3.5 3.5 0 116.708 0A3.5 3.5 0 1111.5 12.5z" />
    </svg>
  );
}
export function FiestaResortIcon(props: React.SVGProps<SVGSVGElement>) {
  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 450 450"
      {...props}
    >
      <path
        fill="white"
        d="M164.446 182.205c-13.246 13.195-26.417 26.465-39.787 39.532-3.476 3.397-7.349 6.512-11.447 9.114-3.978 2.525-8.039.303-8.089-4.535-.075-7.233.145-14.544 1.137-21.697 1.51-10.885 3.585-21.704 5.791-32.475 2.52-12.298 5.444-24.513 8.195-36.763.29-1.29.59-2.58 1.044-4.56-17.587 14.424-35.222 27.065-56.361 34.765 6.603 16.545 6.04 34.099 4.787 51.295-1.623 22.279-6.38 44.075-19.738 62.881-1.793 2.524-3.866 5.013-6.295 6.89-6.063 4.683-11.94 2.164-13.69-5.537-2.992-13.166-2.514-26.4-1.035-39.69.85-7.646 1.118-15.36 2.1-22.986 1.555-12.072 3.42-24.106 5.296-36.134.67-4.294 2.075-8.494 2.467-12.799.14-1.53-1.47-3.49-2.738-4.82-2.494-2.617-5.97-4.511-7.837-7.465-3.053-4.83-1.666-13.625 6.064-14.303 2.957-.26 5.895-.742 9.793-1.246 1.096-4.332 2.6-9.838 3.877-15.397 5.732-24.957 12.689-49.549 26.253-71.52 5.385-8.723 12.746-16.199 23.433-18.927.602-.154 1.277-.02 3.01-.02-15.734 11.126-18.514 28.255-23.47 43.855-7.14 22.468-12.846 45.391-19.173 68.118-1.037 3.727-.107 7.405 2.89 9.2 1.72 1.032 5.112-.061 7.498-.91 16.247-5.78 29.853-15.857 42.84-26.86 5.63-4.77 10.805-10.148 16.79-14.4 2.387-1.696 6.46-1.571 9.637-1.19.736.088 1.812 4.837 1.249 7.067-4.092 16.182-8.822 32.204-12.822 48.407-2.512 10.172-4.176 20.558-6.08 30.873-.726 3.93-1.062 7.932-1.63 12.317.812-.47 1.418-.692 1.856-1.095 9.1-8.389 18.081-16.909 27.305-25.157 4.598-4.111 9.396-8.1 14.552-11.452 3.642-2.367 5.084-5.242 5.98-9.304 4.501-20.415 11.415-39.762 26.961-54.724 2.379-2.289 5.38-4.736 8.446-5.352 8.943-1.798 11.802 4.34 10.358 12.591-3.261 18.636-11.67 34.761-25.233 48.116-3.05 3.004-7.411 5.874-8.398 9.55-2.88 10.728-4.36 21.833-6.388 32.79l2.173 1.246c1.663-1.53 3.657-2.825 4.938-4.627 10.813-15.213 21.608-30.449 35.674-42.925 8.559-7.591 17.354-14.923 26.174-22.212 2.594-2.144 3.262-4.217 2.057-7.411-5.043-13.366 3.935-30.86 15.447-33.635 9.326-2.25 17.924 3.125 21.277 10.68.743 1.673-.822 4.37-1.325 6.597-1.441-1.429-3.316-2.623-4.238-4.332-2.19-4.06-5.124-6.705-9.89-6.6-4.492.099-10.064 4.512-11.127 8.567-2.553 9.748 1.23 18.338 4.963 26.918 1.402 3.221 2.99 6.362 4.227 8.98 13.25-5.583 26.16-11.284 39.3-16.392 3.731-1.451 5.4-3.052 6.158-7.085 2.826-15.05 6.192-30 9.319-44.994.12-.579-.14-1.237-.259-2.13-7.459 1.615-14.618 3.447-21.88 4.672-11.507 1.941-23.068 2.515-34.237-1.8-2.488-.962-4.663-2.862-6.813-4.545-3.32-2.599-2.09-5.77-.107-8.218 1.904-2.351 3.886-3.73 7.832-1.457 8.26 4.76 17.1 7.858 27.279 5.618 9.483-2.086 19.275-2.746 28.894-4.264 1.21-.191 2.804-1.589 3.193-2.766 2.863-8.677 5.502-17.43 8.128-26.183.738-2.459 2.2-3.203 4.682-2.989 5.776.498 9.617 6.953 7.46 12.472-2.104 5.385-3.967 10.865-6.148 16.89 21.78-3.328 43.107-4.983 63.476 6.56-5.505 3.954-10.493.45-15.246-.417-11.312-2.063-22.526-1.975-33.786-.195-4.616.73-9.24 1.584-13.73 2.844-1.707.478-4.006 1.997-4.408 3.482-3.317 12.254-6.492 24.557-9.24 36.95-3.421 15.432-6.406 30.961-9.556 46.453-1.532 7.535-3.011 15.08-4.742 23.761 5.78-8.346 10.547-15.996 16.076-23.05A1603.565 1603.565 0 0 1 360 120.587c11.09-13.205 24.429-23.958 38.625-33.664 4.86-3.322 10.38-2.68 15.014 1.93.646-1.687 1.553-3.2 1.774-4.807.506-3.694 2.62-4.725 5.879-3.926 4.051.994 4.385 4.057 3.483 7.352-1.226 4.479-2.945 8.826-4.093 13.322-5.286 20.712-11.215 41.302-15.423 62.235-3.689 18.352-4.306 37.105 1.817 55.304 1.99 5.915 4.91 11.517 7.568 17.638-5.665.097-8.182-4.476-10.492-8.065-5.121-7.957-7.517-17.053-8.107-26.492-.546-8.735-.827-17.49-.983-26.242-.054-3.068.609-6.15 1.296-9.792.395-1.401.438-2.235.537-4.145l-1.485 2.997c-3.71 3.992-7.077 8.404-11.258 11.82-2.573 2.1-6.3 3.239-9.673 3.783-3.322.535-6.548-.428-8.307-4.221-3.86-8.325-1.361-16.483.365-24.616 3.076-14.487 8.967-27.958 15.785-41.65.361-1.008.402-1.548.442-2.088l-1.318.945c-14.593 12.9-26.215 28.32-37.22 44.22-11.278 16.294-22.146 32.874-33.59 49.048-1.427 2.017-5.354 3.333-7.997 3.152-3.415-.234-3.987-3.74-3.624-6.846 1.268-10.833 2.514-21.67 3.933-32.484 1.221-9.3 2.667-18.57 4.22-29.28l-39.682 18.86c2.704 6.519 5.25 11.883 7.184 17.46 6.268 18.081 8.507 36.367 1.306 54.756-3.279 8.373-9.306 14.403-17.548 17.95-9.325 4.013-18.862 6.296-29.227 4.096-11.535-2.45-16.65-13.503-17.201-21.415-1.43-20.55 6.889-37.322 20.631-51.715 6.527-6.836 13.824-12.937 21.328-19.887l-5.357-13.157c-3.688 3.075-7.445 5.891-10.833 9.097-8.02 7.587-16.47 14.84-23.64 23.178-11.226 13.053-21.462 26.953-32.335 40.318-1.379 1.695-3.98 3.026-6.172 3.312-6.646.865-10.453-3.165-10.59-10.908-.141-7.988-.028-15.98.292-24.526.36-1.094.4-1.634.44-2.174l-1.318.945m20.636-21.845c8.873-8.797 15.622-18.928 19.085-31.025 1.34-4.686 3.407-9.485-.351-15.4-11.79 13.622-15.272 30.067-20.459 46.186l-.121 1.619c.44-.315.879-.63 1.846-1.38m42.494 78.69c5.285 4.368 14.248 3.706 21.735-.764 12.634-7.543 20.353-32.548 17.198-46.13-2.224-9.577-5.633-18.877-8.513-28.3l-1.7-.813c-7.432 7.317-15.195 14.335-22.164 22.07-3.792 4.21-7.016 9.331-9.062 14.599-2 5.148-2.171 11.005-3.158 16.548-1.449 8.145-.118 15.648 5.664 22.79M64 214.453c.004-1.332-.177-2.695.042-3.991 2.517-14.94.454-29.353-4.413-43.258h-5.512c-.45 4.212-.77 8.26-1.335 12.274-1.538 10.923-3.33 21.811-4.737 32.75-1.226 9.545-2.124 19.133-3.056 28.713-1.061 10.903-2.06 21.813-2.916 32.733-.115 1.472.756 3.021 1.17 4.535l1.76.02C57.862 259.354 60.88 237.353 64 214.454m324.504-51.452c12.413-18.342 17.71-39.11 20.38-60.698.338-2.737-.908-5.671-1.42-8.514l-2.798-1.245c-1.276 2.002-2.51 4.031-3.833 6.002-12.646 18.837-19.359 40.073-24.712 61.804-.981 3.983-.575 8.308-.81 12.475l2.304 1.052c3.474-3.434 6.948-6.869 10.89-10.876m-348.897-15c-1.2.794-3.53 2.066-3.428 2.308 1.013 2.395 2.43 4.62 4.374 8.009l2.438-10.092a62.744 62.744 0 0 0-3.384-.226zm215.325 156.973c8.758-2.947 18.997 2.357 23.24 11.676 4.21 9.251 1.876 21.701-7.94 27.68-6.97 4.247-20.985 4.12-27.61-4.178-5.49-6.878-6.19-14.74-3.306-22.486 2.493-6.694 7.18-11.99 15.616-12.692m-9.01 29.462c2.8 6.783 12.4 9.8 19.665 6.24 7.52-3.685 11.28-12.463 7.81-20.81-3.372-8.117-11.202-11.936-19.445-9.313-7.361 2.343-14.693 12.38-8.03 23.883zM48.305 308.802c4.9 10.21 3.787 15.535-4.068 20.604l8.965 15.979c-3.665 1.279-6.416 1.11-8.105-2.727-.967-2.2-2.408-4.192-3.357-6.397-2.205-5.118-5.573-7.763-11.734-5.763v15.312h-4.8v-40.868c7.807.808 15.905-2.165 23.099 3.86m-4.976 3.234-13.09-2.827v15.45c14.86 2.597 18.395-4.753 13.09-12.623zm308.789 11.577c-1.956 2.348-3.798 4.307-5.709 6.34l8.853 15.583c-4.355 1.397-7.03.024-8.813-3.574-1.141-2.3-2.866-4.375-3.66-6.773-1.81-5.472-5.659-5.928-10.755-4.837v15.44h-4.814v-40.789c5.053 0 10.066-.505 14.938.109 9.292 1.169 12.645 7.911 9.96 18.501m-6.732-.537c3.091-2.898 3.415-6.011.852-9.454-3.802-5.106-9.03-3.456-13.987-3.425v15.417c4.437-.671 8.518-1.289 13.135-2.538zM112.023 322h8.79l.243 4.8h-15.742v13.957h17.348v5.072H99.365V305.22h23.406v4.675h-17.508V322h6.76zm58.297 22.723c-5.085-1.73-2.814-5.506-3.392-9.306 2.784 2.013 4.764 3.968 7.143 5.017 2.286 1.007 5.267 1.986 7.428 1.317 2.461-.762 5.321-3.01 6.154-5.289.56-1.535-1.628-4.795-3.415-6.302-2.907-2.452-6.543-4.02-9.778-6.106-5.574-3.592-7.142-8.403-4.58-13.6 2.348-4.769 8.935-7.583 14.085-6.02 6.39 1.94 6.439 2.011 5.719 7.74-3.33-.719-6.712-2.044-10.048-1.934-1.806.059-4.08 2.274-5.048 4.099-.452.85 1.365 3.504 2.743 4.598a50.928 50.928 0 0 0 8.94 5.697c6.187 3.075 8.22 8.508 6.4 14.297-1.013 3.225-5.004 6.983-8.254 7.673-4.278.909-9.147-.962-14.096-1.881zM128 392h294.334v.675H25.667l-.004-.675H128zm294.562-82.334c-3.53.288-6.686.288-10.377.288v35.836h-5.088v-35.643h-10.92l-.226-4.873h26.985c0 1.297 0 2.7-.374 4.392z"
      />
      <path
        fill="white"
        d="M145.978 96.94c-1.794 3.578-3.2 7.065-5.506 9.789-1.179 1.392-4.244 2.293-5.948 1.768-1.266-.39-2.26-3.398-2.392-5.307-.187-2.69.424-5.463.9-8.165.454-2.582.941-5.226 4.63-5.055 3.295.152 6.743-.241 7.403 4.358.11.764.61 1.473.913 2.613zM195 370.033v12.755l-1.14.579c-4.054-4.68-8.11-9.358-12.4-14.308-1.549 4.691 1.1 10.034-1.56 14.167l-1.625-.296v-22.306c4.599 5.007 8.798 9.58 13.61 14.817V361.45c3.115.194 3.115.194 3.115 8.584zm-163.36 8.114c-2.325 4.251-2.325 4.251-6.128 4.499l9.946-23.04 9.917 22.627-.847 1.205c-3.914-2.515-6.967-7.514-12.889-5.29zm266.265 1.113c-3.171 1.53-6.239 3.425-9.354 3.507-3.054.08-5.8-1.852-5.596-5.957.205-4.144-.067-8.31.119-12.457.05-1.132.998-2.225 1.534-3.336.464 1.184 1.26 2.349 1.328 3.554.185 3.313.044 6.644.07 9.967.026 3.194 1.579 5.53 4.81 5.312 2.747-.185 4.622-1.875 4.262-5.344-.358-3.452-.183-6.976-.013-10.457.05-1.03.878-2.023 1.35-3.033.528.953 1.484 1.893 1.513 2.861.151 4.98.064 9.968-.023 15.382zm114.097-16.056c1.445-1.96 10.438-3.037 11.62-1.815.276.286.482 1.044.307 1.281-.398.542-1.031 1.229-1.606 1.265-2.285.143-4.584.059-7.098.059v5.912h7.315c-.158 2.89-.158 2.89-7.334 3.33-.066.886-.16 1.82-.198 2.756-.035.813-.008 1.629-.008 2.823h8.758l.2 4.04H412c0-6.359 0-12.764.002-19.65zm-92.849 5.225c-1.35-6.346 2.457-7.468 6.992-7.478 3.885-.008 4.287 1.89 3.655 4.456l-7.573-.955-.722 1.72c1.953 1.535 4.146 2.852 5.796 4.663 1.823 2 3.86 4.297 4.404 6.772.289 1.31-2.177 4.387-3.78 4.698-2.806.544-5.979-.165-8.832-.949-.73-.2-.841-2.65-1.542-5.161 2.59 1.594 3.98 2.995 5.567 3.269 1.487.257 3.18-.68 4.782-1.09-.659-1.46-.989-3.25-2.047-4.312-1.964-1.971-4.354-3.519-6.7-5.633zm-95.631 11.401c2.965-.451 5.554-1.049 9.243-1.9-1.344 1.646-2.211 3.552-3.679 4.34-3.694 1.984-9.874.409-12.27-3.03-3.206-4.597-3.273-9.985.113-14.583 2.762-3.75 8.163-5.032 12.256-2.824 1.458.786 2.329 2.66 3.032 4.394-6.46-3.294-10.338-3.007-13.057 1.31-2.775 4.404-1.26 9.016 4.362 12.293zm159.391 3.12c-3.23-7.143-6.058-14.277-9.405-22.72 8.171 2.46 5.785 10.753 10.132 14.175.934-2.369 1.805-5.05 3.033-7.556 1.085-2.214 2.567-4.234 3.874-6.34l2.142 1.276c-3.125 7.058-6.25 14.116-9.776 21.165zM71.016 379h4.757l.185 3.857h-11.62v-21.512L68 360.95c0 5.258-.14 10.198.116 15.118.052 1.017 1.58 1.957 2.9 2.932zm28.055 4c-2.556.144-4.298.293-4.144-2.88.265-5.456-.006-10.936.15-16.4.027-.913 1.077-1.797 1.653-2.695.423.886 1.19 1.764 1.212 2.66.12 4.938.058 9.881.058 15.196h8.622c.681 2.705.83 4.526-2.605 4.146-1.473-.163-2.98-.027-4.946-.027zM253 366.154c0-1.31-.225-2.23.061-2.943.33-.822 1.114-1.463 1.7-2.183.413.73 1.167 1.452 1.182 2.19.105 5.103.055 10.209.055 15.681h7.75v3.848H253v-16.593zm-96 3.881v12.725l-3.841.197v-21.576l3.841-.476v9.13zm214.219 45.422c-.192-3.88-.192-7.348-.192-10.783 7.69-1.64 8.342-.973 7.436 6.479-.16 1.32.907 2.79.595 5.122l-3.798-3.707c-1.122.963-2.486 2.133-4.041 2.89zm-277.459.419c-.438-3.825-.438-7.576-.438-11.344 7.203-1.207 7.638-.713 6.827 6.149-.185 1.57.88 3.288.844 5.766l-5.204-4.639c-.565 1.47-1.077 2.806-2.028 4.068zM294 410.874c.533-3.537 1.291-6.54 5.225-6.855 2.827-.226 5.553-.3 6.805 3.207 1.233 3.454.597 6.453-2.283 8.418-3.102 2.117-7.532-.08-9.746-4.77m4.814 3.098c4.616-.528 6.838-3.318 4.487-5.915-.957-1.057-3.844-1.566-5.12-.906-3.39 1.75-1.881 4.27.633 6.82zm-233.588-1.345c-.905-1.346-1.61-2.375-3-4.404l-.42 7.774-1.244-.033v-12.619l7.22 8.007.475-7.374 1.286.082v12.73c-1.375-1.285-2.747-2.566-4.317-4.163zm289.772-49.34c0 5.936.077 11.399-.07 16.855-.027.96-.988 1.896-1.517 2.842-.47-.84-1.33-1.671-1.348-2.52a445.064 445.064 0 0 1-.002-17.372c.013-.699.847-1.382 1.301-2.072.545.597 1.09 1.194 1.636 2.267zm-197.508 40.721c1.452 1.648 3.054 3.227 3.238 4.957.093.87-2.477 1.921-3.68 3.062-1.163 1.103-2.117 2.426-3.47 4.01v-12.036c.967 0 2.222 0 3.912.007zm-41.507 4.107c1.032 2.705 2.049 5.019 3.065 7.332l-.64.808c-1.556-1.079-3.096-2.984-4.673-3.015-1.742-.034-3.517 1.65-6.168 3.058l5.283-13.053c1.24 1.781 2.179 3.13 3.133 4.87zm54.054 5.718c-.492.895-.887 1.425-1.367 1.861-.207.19-.591.184-2.204.626l5.457-13.638 6.046 13.262c-2.814-.898-5.342-1.705-7.932-2.11zm249.948-9.783c2.118 3.772 3.843 7.546 5.569 11.32l-.959.989c-2.937-2.664-5.885-6.127-8.694.618l-1.201-1.558c1.63-3.79 3.26-7.578 5.285-11.37zm-77.741 7.316c1.275-2.637 2.342-4.944 3.938-8.394l5.75 12.568-.685.661c-1.673-1.066-3.307-2.88-5.031-2.97-1.487-.08-3.078 1.804-5.307 3.27.503-2.144.815-3.474 1.335-5.135zm56.383-5.486c5.486-2.798 6.974-2.663 9.565.888-3.447.023-8.704-2.54-8.02 3.842.482 4.485 4.305 3.781 7.79 2.213l.121 2.03c-2.132.38-4.385 1.35-6.357.946-1.434-.294-3.084-2.215-3.571-3.749-.562-1.767.049-3.906.472-6.17zm-153.042 10.11c-2.742-.808-6.155-.99-7.095-2.609-1.077-1.854-.788-5.549.463-7.38 1.013-1.482 4.307-1.603 6.642-1.872.826-.095 1.807 1.158 2.302 1.505-2.8.996-5.313 1.686-7.556 2.881-.384.204-.05 3.362.709 3.78 1.837 1.01 4.12 1.208 6.729 1.86a12.512 12.512 0 0 1-2.194 1.834zM36.664 405.228c-.02.774-.566 1.677-.594 1.661-2.701-1.517-5.21-1.4-6.678 1.484-.508 1-.12 3.47.632 3.894 1.826 1.027 4.107 1.247 7.336 2.086-1.964.609-3.81 1.828-5.271 1.47-1.857-.454-4.58-1.95-4.874-3.41-1.225-6.1.568-10.177 9.449-7.185zM282.206 404c1.923.458 3.436.915 5.004 1.39-2.92 1.105-5.326 1.581-7.093 2.909-.67.502-.404 3.882.386 4.352 1.646.98 3.926.894 6.597 1.359-.573.552-1.258 1.802-2.075 1.895-3.273.37-6.843.388-7.858-3.65-.98-3.9.317-7.057 5.039-8.254zM184 410.072c1.487-2.298 2.641-4.787 4.578-5.849 1.3-.713 3.71.595 5.872 1.052-3.112 1.315-5.487 2.02-7.46 3.332-.607.404-.573 3.324-.042 3.607 1.863.994 4.072 1.34 6.692 2.086-.109.13-.649 1.452-1.425 1.61-4.843.984-7.127-.62-8.215-5.838zm-132.5 5.686c-2.23.21-4.062.21-6.197.21V404.41h7.422l-5.702 3.351 5.584 2.192c-1.25.476-2.027.706-2.743 1.06-.974.48-1.902 1.057-2.85 1.593 1.018.465 2.077.862 3.041 1.42.68.393 1.233 1.006 1.445 1.732zm266.4.241c-1.987-.44-3.554-.882-5.12-1.324l.347-1.4 5.644.798.535-1.1c-1.285-1-2.86-1.793-3.77-3.063-.85-1.184-1.36-2.9-1.265-4.33.04-.595 2.01-1.35 3.164-1.478.795-.088 1.696.776 2.55 1.216-.85.293-1.726.527-2.537.903-.42.195-.726.64-.665.583 1.463 2.046 3.114 3.852 4.04 5.975.26.595-1.61 2.12-2.923 3.22zm14.062-.037c-.962-1.951-1.407-3.947-1.979-5.906-.507-1.739-1.156-3.437-1.854-5.482h6.622c-.582 2.174-1.25 4.342-1.723 6.55-.337 1.574-.412 3.204-1.066 4.838zM79.255 404.001h5.494c-.65 3.355-1.121 6.214-1.79 9.027-.248 1.044-.958 1.978-1.458 2.962-.5-.983-1.268-1.92-1.45-2.959-.495-2.84 1.438-6.53-2.976-7.89.577-.38 1.153-.76 2.18-1.14zm46.746 2.261c.55-1.059 1.098-1.65 1.646-2.24.45.693 1.241 1.365 1.289 2.086.162 2.454.062 4.926.062 7.46l4.018.992-.02.917H126l.001-9.215zM213 411.823v-7.55h6.902l.22 1.001-6.5 1.554 5.887 3.392-4.232 1.17-.68 4.6-1.186.061a133.09 133.09 0 0 1-.411-4.228zm50.593 1.937c-1.76-.505-3.413-.978-4.445-2.05-.39-.403.36-2.847 1.118-3.19 1.077-.485 3.645-.203 3.806.308.447 1.422-.018 3.131-.479 4.932z"
      />
    </svg>
  )
}
export function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-3.648 11.711L12.002 19l-3.349-3.289a2.129 2.129 0 010-3.069 2.224 2.224 0 013.125 0l.224.219.224-.219a2.225 2.225 0 013.126 0 2.129 2.129 0 010 3.069zM19 9H5V7h14v2z" />
    </svg>
  );
}
export function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      {...props}
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z" />
    </svg>
  );
}
export function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z" />
    </svg>
  );
}