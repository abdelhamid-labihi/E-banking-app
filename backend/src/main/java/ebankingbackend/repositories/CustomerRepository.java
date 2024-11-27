package ebankingbackend.repositories;

import ebankingbackend.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository extends JpaRepository<ebankingbackend.entities.Customer,Long> {
    @Query("select c from Customer c where c.name like :kw")
    List<ebankingbackend.entities.Customer> searchCustomer(@Param("kw") String keyword);

}
