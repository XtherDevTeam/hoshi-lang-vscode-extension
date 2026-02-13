import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Hoshi language extension is now active.');

  const provider = vscode.languages.registerCompletionItemProvider(
    [
      { language: 'hoshi', scheme: 'file' },
      { language: 'markdown', scheme: 'file' }
    ],
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        // Simple completion for demonstration
        const completion = new vscode.CompletionItem('hoshi-sample');
        completion.kind = vscode.CompletionItemKind.Snippet;
        completion.insertText = 'func main() {\n\tprintln("Hello, Hoshi!");\n}';
        completion.detail = 'Hoshi main function template';

        return [completion];
      }
    }
  );

  context.subscriptions.push(provider);
}

export function deactivate() {}
