import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100 text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} strokeWidth={2.5} />
            </div>

            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Mission Critical Error
            </h1>

            <p className="text-slate-500 mb-6 leading-relaxed">
              We encountered an unexpected situation while processing your request.
              Rest assured, our engineers have been notified.
            </p>

            <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left border border-slate-100 overflow-hidden">
                <p className="text-xs font-mono text-slate-600 break-words">
                    {this.state.error?.message || 'Unknown error occurred'}
                </p>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="
                flex items-center justify-center gap-2 w-full px-6 py-3
                bg-slate-900 hover:bg-slate-800 text-white
                rounded-xl font-semibold transition-all duration-200
                shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5
              "
            >
              <RefreshCw size={18} />
              Reload System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
