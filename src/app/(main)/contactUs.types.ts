export interface ContactUsRequest{
    title: string;
    message: string
}

export interface ContactUsResponse {
  dataValues: {
    id: string;
    title: string;
    message: string;
  };
  _previousDataValues: {
    id: string;
    title: string;
    message: string;
  };
  uniqno: number;
  _changed: Record<string, unknown>;
  _options: {
    isNewRecord: boolean;
    _schema: string;
    _schemaDelimiter: string;
  };
  isNewRecord: boolean;
}
