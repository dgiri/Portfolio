interface WipProps {
  title: string;
  description: string;
}

const Wip = ({ title, description }: WipProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="inline-flex items-center rounded-lg bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 text-sm font-medium mb-4">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>Work in Progress</span>
      </div>

      <h2 className="max-w-2xl text-2xl font-bold md:text-3xl lg:text-4xl mb-4">
        {title}
      </h2>

      <p className="mt-4 max-w-prose text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default Wip;
