A typical frame of reference for analysis in data science is called a rectangular data object. Such as a spreadsheet or database table.

Key terms:

1. Data frame: a rectangular part of data such as a spreadsheet or database table used for analysis.
2. Feature: A column in the rectangular frame, also called as attribute, input, predictor, variable.
3. Outcome (dependent variable, response, target, output): Many data science projects involve predicting an outcome — often a yes/no outcome.
4. Record (case, example, instance, observation, pattern, sample):
A row in the rectangular data frame.

Rectangular data is essentially a two-dimensional matrix with rows indicating records (cases)
and columns indicating features (variables). The data doesn’t always start in this form:
unstructured data (e.g., text) must be processed and manipulated so that it can be represented as a
set of features in the rectangular data (see [Structured Data](structured-data.md)). Data in relational
databases must be extracted and put into a single table for most data analysis and modeling tasks.


Data Frames and Indexes:

Traditional database tables have one or more columns designated as an index. This can vastly
improve the efficiency of certain SQL queries. In Python, with the pandas library, the basic
rectangular data structure is a DataFrame object. By default, an automatic integer index is created
for a DataFrame based on the order of the rows. In pandas, it is also possible to set
multilevel/hierarchical indexes to improve the efficiency of certain operations.


Non - Rectangular Data:
There are other data structures besides rectangular data.

Time series data records successive measurements of the same variable. It is the raw material for
statistical forecasting methods, and it is also a key component of the data produced by devices —
the Internet of Things.


Spatial data structures, which are used in mapping and location analytics, are more complex and
varied than rectangular data structures. In the object representation, the focus of the data is an
object (e.g., a house) and its spatial coordinates. The field view, by contrast, focuses on small
units of space and the value of a relevant metric (pixel brightness, for example).

Graph (or network) data structures are used to represent physical, social, and abstract
relationships. For example, a graph of a social network, such as Facebook or LinkedIn, may
represent connections between people on the network. Distribution hubs connected by roads are
an example of a physical network. Graph structures are useful for certain types of problems, such
as network optimization and recommender systems.
Each of these data types has its specialized methodology in data science