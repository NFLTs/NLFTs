import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();

  return (
    <Layout
      pageMap={pageMap}
      navbar={
        <Navbar
          logo={
            <div className="flex items-center gap-2 select-none">
              <div className="p-1.5 bg-indigo-600 rounded-lg hover:rotate-12 transition-transform duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight">
                NLFTs<span className="text-indigo-500">_</span>DOCS
              </span>
            </div>
          }
          projectLink="https://github.com/your-repo/nlfts"
        />
      }
      footer={
        <Footer>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium">
              © {new Date().getFullYear()} NLFTs Protocol. Built for elite developers.
            </p>
            <div className="flex gap-4 text-xs text-gray-400 font-mono uppercase tracking-widest">
              <span>Status: Operational</span>
              <span>Version: 4.6.1</span>
            </div>
          </div>
        </Footer>
      }
      sidebar={{
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
      }}
      toc={{
        float: true,
      }}
    >
      {children}
    </Layout>
  );
}