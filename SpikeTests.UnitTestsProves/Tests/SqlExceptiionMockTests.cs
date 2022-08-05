using Moq;
using SpikeTests.UnitTestsProves.Subjects;
using SpikeTests.UnitTestsProves.Subjects.Contracts;
using System.Data.SqlClient;
using System.Reflection;

namespace SpikeTests.UnitTestsProves.Tests {
    public class SqlExceptiionMockTests {

        Mock<ISQLExceptionThrower> mockConfigSqlExceptionThrower;
        ISQLExceptionThrower sqlExceptionThrower;
        ISQLExceptionSubject subject;

        SqlException sqlException;

        string parameter;
        string stringReturn;

        [SetUp]
        public void Setup() {
            mockConfigSqlExceptionThrower = new Mock<ISQLExceptionThrower>();

            sqlException = GetSqlException();
            
            parameter = "SqlException";
            stringReturn = "Worked";
        }

        private SqlException GetSqlException() {
            SqlErrorCollection collection = Construct<SqlErrorCollection>();
            SqlError error = Construct<SqlError>(-2, (byte)2, (byte)3, "Servername", "Error Message For SQLServer Test", "proc", 100, (uint)1, new Exception());

            typeof(SqlErrorCollection)
                .GetMethod("Add", BindingFlags.NonPublic | BindingFlags.Instance)
                .Invoke(collection, new object[] { error });

            var sqlException = typeof(SqlException)
                .GetMethod("CreateException", BindingFlags.NonPublic | BindingFlags.Static, null, CallingConventions.ExplicitThis, new[] { typeof(SqlErrorCollection), typeof(string) }, new ParameterModifier[] { })
                .Invoke(null, new object[] { collection, "11.0.0" }) as SqlException;

            return sqlException;
        }

        private T Construct<T>(params object[] p) {
            ConstructorInfo[] returnContructor = typeof(T).GetConstructors(BindingFlags.NonPublic | BindingFlags.Instance);
            return (T)returnContructor[0].Invoke(p);
        }

        [Test]
        public void SqlExceptiionMock_WhenThrowsExceptionIsCalled_IsOneTime() {

            //Arrange
            mockConfigSqlExceptionThrower.Setup(thrower => thrower.ThrowsException(parameter)).Returns(stringReturn);
            sqlExceptionThrower = mockConfigSqlExceptionThrower.Object;

            subject = new SQLExceptionSubject(sqlExceptionThrower);

            //Act
            subject.RunTestForBeUsed(parameter);

            //Assert
            mockConfigSqlExceptionThrower.Verify(thrower => thrower.ThrowsException(parameter), Times.Exactly(1));
        }

        [Test]
        public void SqlExceptiionMock_WhenThrowsExceptionIsCalled_ThrowSqlException() {

            //Arrange
            mockConfigSqlExceptionThrower.Setup(thrower => thrower.ThrowsException(parameter)).Throws(sqlException);
            sqlExceptionThrower = mockConfigSqlExceptionThrower.Object;

            subject = new SQLExceptionSubject(sqlExceptionThrower);

            //Act            
            //Assert
            Assert.Throws<SqlException>(() => subject.RunTestForBeUsed(parameter));            
        }

        [TearDown]
        public void TearDown() {
        }
    }
}