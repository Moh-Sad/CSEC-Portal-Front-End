// components/header.tsx
export default function Header() {
    return (
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Hello Henok 👋</h2>
          <p className="text-sm text-gray-500">Good Morning</p>
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded border"
          />
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
        </div>
      </div>
    );
  }
  