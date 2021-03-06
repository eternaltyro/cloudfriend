'use strict';

/**
 * Create a Glue Table.
 *
 * Pre-configured versions of this shortcut are available for tables stored as line-delimited JSON or ORC:
 * - [GlueJsonTable](#gluejsontable)
 * - [GlueOrcTable](#glueorctable)
 *
 * @param {Object} options - Options.
 * @param {String} options.LogicalName - The logical name of the Glue Table within the CloudFormation template.
 * @param {String} options.Name - The name of the table. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-name).
 * @param {String} options.DatabaseName - The name of the database the table
 * resides in. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html#cfn-glue-table-databasename).
 * @param {Array<Object>} options.Columns - List of the table's columns. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-columns).
 * @param {String} [options.CatalogId=AccountId] - The AWS account ID for the account in which to create the table. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html#cfn-glue-table-catalogid).
 * @param {String} [options.Owner=undefined] - The table owner. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-owner).
 * @param {Object} [options.Parameters=undefined] - Table parameters. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-parameters).
 * @param {Array<String>} [options.PartitionKeys=[]] - List of partitioning columns. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-partitionkeys).
 * @param {String} [options.Description='Created by the ${AWS::StackName} CloudFormation stack'] - The description of the table. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-description).
 * @param {Number} [options.Retention=undefined] - Retention time for the table. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-retention).
 * @param {String} [options.TableType=undefined] - The type of this table. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-tabletype).
 * @param {String} [options.ViewExpandedText=undefined] - The expanded text of the view. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-viewexpandedtext).
 * @param {String} [options.ViewOriginalText=undefined] - The original text of the view. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html#cfn-glue-table-tableinput-vieworiginaltext).
 * @param {Array<String>} [options.BucketColumns=undefined] - List of bucketing columns. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-bucketcolumns).
 * @param {Boolean} [options.Compressed=false] - Whether the data is compressed. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-compressed).
 * @param {String} [options.InputFormat=undefined] - The table's input format. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-inputformat).
 * @param {String} [options.Location=''] - The physical location of the table. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-location).
 * @param {Number} [options.NumberOfBuckets=0] See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-numberofbuckets).
 * @param {String} [options.OutputFormat=undefined] - The table's output format. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-outputformat).
 * @param {Object} [options.StorageParameters=undefined] - Storage parameters. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-parameters).
 * @param {Object} [options.SerdeInfo={}] - The serialization/deserialization information. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-serdeinfo).
 * @param {Object} [options.SkewedInfo=undefined] - Frequent value information. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-skewedinfo).
 * @param {Array<Object>} [options.SortColumns=undefined] - List specifying the sort order. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-sortcolumns).
 * @param {Boolean} [options.StoredAsSubDirectories=true] - See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html#cfn-glue-table-storagedescriptor-storedasdubdirectories).
 * @param {String} [options.Condition=undefined] - If there is a `Condition` defined
 * in the template that should control whether to create this database,
 * specify the name of the condition here. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html).
 * @param {String} [options.DependsOn=undefined] - Specify a stack resource dependency
 * to this database. See [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
 * @example
 * const cf = require('@mapbox/cloudfriend');
 *
 * const myTemplate = { ... };
 *
 * const table = new cf.shortcuts.GlueTable({
 *   LogicalName: 'MyTable',
 *   DatabaseName: 'my_database',
 *   Name: 'my_table',
 *   Columns: [
 *     { Name: 'column_name', Type: 'string', Comment: 'my_column description' }
 *   ]
 * });
 *
 * module.exports = cf.merge(myTemplate, table);
 */
class GlueTable {
  constructor(options) {
    if (!options) throw new Error('Options required');
    const {
      LogicalName,
      Name,
      DatabaseName,
      Columns,
      CatalogId = { Ref: 'AWS::AccountId' },
      Owner,
      Parameters,
      PartitionKeys = [],
      Description = { 'Fn::Sub': 'Created by the ${AWS::StackName} CloudFormation stack' },
      Retention,
      TableType,
      ViewExpandedText,
      ViewOriginalText,
      BucketColumns,
      Compressed = false,
      InputFormat,
      Location = '',
      NumberOfBuckets = 0,
      OutputFormat,
      StorageParameters,
      SerdeInfo = {},
      SkewedInfo,
      SortColumns,
      StoredAsSubDirectories = true,
      Condition,
      DependsOn
    } = options;

    const required = [LogicalName, Name, DatabaseName, Columns];
    if (required.some((variable) => !variable))
      throw new Error('You must provide a LogicalName, Name, DatabaseName, and Columns');

    this.Resources = {
      [LogicalName]: {
        Type: 'AWS::Glue::Table',
        Condition,
        DependsOn,
        Properties: {
          CatalogId,
          DatabaseName,
          TableInput: {
            Description,
            Name,
            Owner,
            Parameters,
            PartitionKeys,
            Retention,
            TableType,
            ViewExpandedText,
            ViewOriginalText,
            StorageDescriptor: {
              BucketColumns,
              Columns,
              Compressed,
              InputFormat,
              Location,
              NumberOfBuckets,
              OutputFormat,
              Parameters: StorageParameters,
              SerdeInfo,
              SkewedInfo,
              SortColumns,
              StoredAsSubDirectories
            }
          }
        }
      }
    };
  }
}

module.exports = GlueTable;
