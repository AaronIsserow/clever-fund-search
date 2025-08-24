import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface UploadResult {
  success: boolean;
  message: string;
  rowNumber?: number;
}

const Admin = () => {
  const [uploadResults, setUploadResults] = useState<UploadResult[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadResults([]);

    try {
      const text = await file.text();
      const lines = text.split('\n');
      const results: UploadResult[] = [];

      // Skip header row
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const columns = line.split(',');
        
        // Basic validation
        if (columns.length < 4) {
          results.push({
            success: false,
            message: `Row ${i + 1}: Insufficient columns`,
            rowNumber: i + 1
          });
          continue;
        }

        const isin = columns[1]?.trim();
        if (!isin || !/^[A-Z0-9]{12}$/.test(isin)) {
          results.push({
            success: false,
            message: `Row ${i + 1}: Invalid ISIN format`,
            rowNumber: i + 1
          });
          continue;
        }

        results.push({
          success: true,
          message: `Row ${i + 1}: Successfully processed fund "${columns[0]?.trim()}"`,
          rowNumber: i + 1
        });
      }

      setUploadResults(results);
    } catch (error) {
      setUploadResults([{
        success: false,
        message: 'Failed to parse CSV file'
      }]);
    } finally {
      setIsUploading(false);
    }
  };

  const successCount = uploadResults.filter(r => r.success).length;
  const errorCount = uploadResults.filter(r => !r.success).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Search
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
              <p className="text-sm text-muted-foreground">Manage fund data</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Fund Data
              </CardTitle>
              <CardDescription>
                Upload a CSV file to add or update fund information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="csv-file">CSV File</Label>
                <Input
                  id="csv-file"
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                />
                <p className="text-sm text-muted-foreground">
                  Expected format: name, isin, product_type, asset_class, sfdr, share_class, domicile, currency, price_date, factsheet_url
                </p>
              </div>

              {isUploading && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Processing CSV file...
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          {uploadResults.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Upload Results</CardTitle>
                <CardDescription>
                  {successCount} successful, {errorCount} errors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {uploadResults.map((result, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 p-2 rounded-md text-sm ${
                        result.success 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {result.success ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      )}
                      <span>{result.message}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Sample CSV Format */}
          <Card>
            <CardHeader>
              <CardTitle>Sample CSV Format</CardTitle>
              <CardDescription>
                Use this format for your CSV file
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-md overflow-x-auto">
                <pre className="text-sm text-muted-foreground whitespace-pre">
{`name,isin,product_type,asset_class,sfdr,share_class,domicile,currency,price_date,factsheet_url
abrdn Diversified Growth and Income Fund,GB00B1BW3K23,OEIC,Multi Asset,N/A,A Acc,UK,GBP,31-07-2025,https://example.com/factsheet.pdf`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;