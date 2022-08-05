using SpikeTests.UnitTestsProves.Subjects.Contracts;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpikeTests.UnitTestsProves.Subjects {
    public class SQLExceptionSubject : ISQLExceptionSubject {

        private readonly ISQLExceptionThrower _sqlExceptionThrower;

        public SQLExceptionSubject(ISQLExceptionThrower sqlExceptionThrower) {
            _sqlExceptionThrower = sqlExceptionThrower;
        }

        public string RunTestForBeUsed(string parameter) {
            try {                
                return _sqlExceptionThrower.ThrowsException(parameter);
            }
            catch (SqlException sqlEx) { 
                throw sqlEx;
            }
        }
    }
}
